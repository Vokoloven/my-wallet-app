/* eslint-disable react/prop-types */
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { handlePopoverOpen, handlePopoverClose } from './popoverHandlers';

export const MouseOverPopover = ({
    children,
    props: { anchorEl, isConnected, setAnchorEl },
}) => {
    const open = Boolean(anchorEl);

    return (
        <div>
            <Box
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen.bind(null, setAnchorEl)}
                onMouseLeave={handlePopoverClose.bind(null, setAnchorEl)}
            >
                {children}
            </Box>
            <Popover
                id="mouse-over-popover"
                sx={{
                    pointerEvents: 'none',
                }}
                open={!isConnected && open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>Please, connect wallet.</Typography>
            </Popover>
        </div>
    );
};
