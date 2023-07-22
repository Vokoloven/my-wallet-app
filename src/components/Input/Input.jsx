/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import { sxInput } from '../../theme';

export const Input = ({ input: { id, label }, register }) => {
    const { ref: inputRef, ...args } = register(id);

    return (
        <TextField
            id={id}
            label={label}
            variant="outlined"
            sx={{ ...sxInput() }}
            inputRef={inputRef}
            {...args}
        />
    );
};
