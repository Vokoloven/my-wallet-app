export const handlePopoverOpen = (setAnchorEl, event) => {
    setAnchorEl(event.currentTarget);
};

export const handlePopoverClose = (setAnchorEl) => {
    setAnchorEl(null);
};
