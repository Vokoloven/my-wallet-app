export const sxInput = () => {
    const sx = {
        '&:not(:last-child)': {
            mb: 2,
        },
        '& label.Mui-focused': {
            color: 'secondary.dark',
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
            '& fieldset': {
                borderColor: 'secondary.dark',
            },
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'secondary.main',
            },
        },
        '&:hover .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'secondary.dark',
            },
        },
    };
    return sx;
};
