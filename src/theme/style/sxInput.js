export const sxInput = (error) => {
    const paletteName = error ? 'error' : 'secondary';

    const sx = {
        '&:not(:last-child)': {
            mb: 2,
        },
        '& label': { color: `${paletteName}.main` },
        '& label.Mui-focused': {
            color: `${paletteName}.dark`,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: `${paletteName}.main`,
            },
        },
        '& .MuiOutlinedInput-root.Mui-focused': {
            '& fieldset': {
                borderColor: `${paletteName}.dark`,
            },
        },
        '&:hover .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: `${paletteName}.dark`,
            },
        },
    };
    return sx;
};
