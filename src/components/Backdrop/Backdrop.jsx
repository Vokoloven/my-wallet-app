/* eslint-disable react/prop-types */
import Backdrop from '@mui/material/Backdrop';

export const SimpleBackdrop = ({ loading, children }) => {
    return (
        <div>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
            >
                {children}
            </Backdrop>
        </div>
    );
};
