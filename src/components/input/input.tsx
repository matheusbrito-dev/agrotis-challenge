import React, { forwardRef } from 'react';
import { OutlinedInput, InputLabel, FormControl } from '@mui/material';
import { IStyledInputProps } from '@/interfaces/form.interface';

export default function StyledInput({ textLabel, ref, ...props }: IStyledInputProps) {
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel>{textLabel}</InputLabel>
      <OutlinedInput
        ref={ref}
        {...props}
        label={textLabel}
        size="small"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </FormControl>
  );
}
