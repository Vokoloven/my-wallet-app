export const sxButtonOutlined = () => {
    const sx = {
        color: 'secondary.dark',
        '&:hover': {
            bgcolor: 'secondary.light',
        },
        '&.MuiButton-outlined': {
            borderColor: 'secondary.dark',
        },
    };
    return sx;
};
