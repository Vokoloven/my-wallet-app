/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import { sxInput } from 'theme';

export const Input = ({ input: { id, label } }) => {
    return (
        <TextField
            id={id}
            label={label}
            variant="outlined"
            sx={{ ...sxInput() }}
        />
    );
};
