/* eslint-disable react/prop-types */
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loader = ({ loading, sx, size }) => {
    if (loading)
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress size={size} sx={{ ...sx }} />
            </Box>
        );
};
