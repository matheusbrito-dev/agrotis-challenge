import React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

interface TextInputProps {
  control: Control<any>;
  name: string;
  label: string;
  rules?: RegisterOptions;
}

export default function TextInput({ control, name, label, rules }: TextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          error={!!error}
          helperText={error ? error.message : ''}
          fullWidth
          margin="dense"
        />
      )}
    />
  );
}
