/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const AlertDialog = ({
    props: { open, handleClose, transaction, address },
}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-transaction"
                aria-describedby="confirm-transaction"
                disableAutoFocus
                scroll={'paper'}
            >
                <DialogTitle id="alert-dialog-title">
                    {'You are sure in this operation?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-description"
                        sx={{ wordWrap: 'break-word' }}
                    >
                        You will send transaction from address: ${address} to $
                        {transaction.address} in q-ty ${transaction.balance} ETH
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
