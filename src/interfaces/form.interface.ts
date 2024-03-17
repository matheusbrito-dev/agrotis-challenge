import { OutlinedInputProps, ButtonBaseProps } from '@mui/material';

export interface IFormInterface {
  nome: string;
  dataInicial: string;
  dataFinal: string;
  infosPropriedade: {
    id: number;
    nome: string;
  };
  cnpj: string;
  laboratorio: {
    id: number;
    nome: string;
  };
  observacoes: string;
}
export interface IStyledInputProps extends OutlinedInputProps {
  textLabel: string;
}

export interface IStyledButtonBaseProps extends ButtonBaseProps {
  textLabel: string;
}

export interface Property {
  id: number;
  nome: string;
}

export interface Lab {
  id: number;
  nome: string;
}
