import React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  rules?: RegisterOptions;
}

const HandleCNPJMask = (value: string) => {
  let newValue = value
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3/$4')
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d)/, '$1.$2.$3/$4-$5');

  newValue = newValue.substring(0, 18);

  return newValue;
};

const MaskedTextField: React.FC<TextInputProps> = ({ control, name, label, rules }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          onChange={(e) => {
            const maskedValue = HandleCNPJMask(e.target.value);
            field.onChange(maskedValue);
          }}
          error={!!error}
          helperText={error ? error.message : ''}
          fullWidth
          margin="dense"
        />
      )}
    />
  );
};

export default MaskedTextField;
