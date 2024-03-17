import React from 'react';
import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface DateInputProps {
  control: Control<any>;
  name: string;
  label: string;
  rules: {};
}

export default function DateInput({ control, name, label, rules }: DateInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          margin="dense"
          error={!!error}
          helperText={error ? error.message : ''}
        />
      )}
    />
  );
}
