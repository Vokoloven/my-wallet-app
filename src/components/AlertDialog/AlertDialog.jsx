/* eslint-disable react/prop-types */
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Loader } from '../Loader';
import { sxButtonOutlined } from '../../theme';
import { handleClose } from './alertDialogHandlers';

export const AlertDialog = ({
    props: { open, transaction, address, sendTransaction, isLoading, setOpen },
}) => {
    const handleSubmit = () => {
        sendTransaction();
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose.bind(null, setOpen)}
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
                    <Button
                        onClick={handleClose}
                        sx={{ ...sxButtonOutlined() }}
                        disabled={isLoading ? true : false}
                    >
                        Disagree
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        sx={{ ...sxButtonOutlined() }}
                        autoFocus
                        disabled={isLoading ? true : false}
                    >
                        {isLoading ? (
                            <Loader
                                loading={isLoading}
                                size={'1rem'}
                                sx={{ color: 'secondary.dark' }}
                            />
                        ) : (
                            'Agree'
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
