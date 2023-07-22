/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import { sxInput } from 'theme';

export const Input = ({ input: { id, label }, register }) => {
    return (
        <TextField
            id={id}
            {...register(id)}
            label={label}
            variant="outlined"
            sx={{ ...sxInput() }}
        />
    );
};
