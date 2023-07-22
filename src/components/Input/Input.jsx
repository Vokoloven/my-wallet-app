/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';
import { sxInput } from '../../theme';

export const Input = ({ input: { id, label }, register, error }) => {
    const { ref: inputRef, ...args } = register(id);

    return (
        <TextField
            id={id}
            label={label}
            variant="outlined"
            inputRef={inputRef}
            {...args}
            sx={{ ...sxInput(!!error[id]) }}
            error={!!error[id]}
            helperText={error[id]?.message}
            multiline
        />
    );
};
