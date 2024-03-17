import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import { Property, Lab } from '@/interfaces/form.interface'; // Adjust the import path as needed

interface SelectInputProps {
  control: Control<any>;
  name: string;
  label: string;
  options: Property[] | Lab[];
  rules: {};
}

export default function SelectInput({ control, name, label, options, rules }: SelectInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth margin="dense" error={!!error}>
          <InputLabel>{label}</InputLabel>
          <Select {...field} label={label}>
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.nome}
              </MenuItem>
            ))}
          </Select>
          {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
