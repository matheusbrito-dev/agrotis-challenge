import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { StyledForm } from './styles';
import { getLabs, getProperties, postForm } from '@/services/api.routes';
import { Property, Lab } from '@/interfaces/form.interface';
import TextInput from '../textInput/textInput';
import DateInput from '../dateInput/dateInput';
import SelectInput from '../select/select';
import StyledButtonBase from '../button/button';
import MaskedTextField from '../textInput/textInput.mask';

export default function Form() {
  const {
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const [properties, setProperties] = useState<Property[]>([]);
  const [labs, setLabs] = useState<Lab[]>([]);
  const inicialDate = watch('inicialDate');
  const endDate = watch('endDate');

  async function fetchProperties() {
    const res = await getProperties();
    setProperties(res);
  }

  async function fetchLabs() {
    const res = await getLabs();
    setLabs(res);
  }

  const onSubmit = (data: any) => {
    try {
      const formatISODate = (date: string) => new Date(date).toISOString();
      const formattedData = {
        nome: data.name,
        dataInicial: formatISODate(data.inicialDate),
        dataFinal: formatISODate(data.endDate),
        infosPropriedade: {
          id: Number(data.property),
          nome: properties.find((property) => property.id === data.property)?.nome || 'Propriedade não encontrada',
        },
        cnpj: data.cnpj,
        laboratorio: {
          id: Number(data.lab),
          nome: labs.find((lab) => lab.id === data.lab)?.nome || 'Laboratório não encontrado',
        },
        observacoes: data.observations,
      };

      postForm(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProperties();
    fetchLabs();
  }, []);

  useEffect(() => {
    if (inicialDate && endDate && new Date(inicialDate) > new Date(endDate)) {
      setError('inicialDate', { type: 'manual', message: 'A data de inicio não pode ser após a data final' });
      setError('endDate', { type: 'manual', message: 'A data final não pode ser antes da data inicial' });
    }
  }, [inicialDate, endDate, setError]);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextInput control={control} name="name" label="Nome" rules={{ required: 'Campo obrigatório' }} />
      <DateInput control={control} name="inicialDate" label="Data inicial" rules={{ required: 'Campo obrigatório' }} />
      <DateInput control={control} name="endDate" label="Data final" rules={{ required: 'Campo obrigatório' }} />
      <SelectInput
        control={control}
        name="property"
        label="Propriedade"
        options={properties}
        rules={{ required: 'Campo obrigatório' }}
      />
      <SelectInput control={control} name="lab" label="Lab" options={labs} rules={{ required: 'Campo obrigatório' }} />
      <MaskedTextField name="cnpj" label="CNPJ" rules={{ required: 'CNPJ é obrigatório' }} control={control} />
      <TextInput control={control} name="observations" label="Observações" rules={{ required: 'Campo obrigatório' }} />
      <StyledButtonBase type="submit" color="primary" style={{ marginTop: 20 }} textLabel="Cadastrar" />
    </StyledForm>
  );
}
