export const handleButtonContent = (isConnected, address, Typography, data) => {
    const formatAddress = (address) => {
        if (address) {
            const start = address.match(/^0x[a-fA-F0-9]{3}/);
            const end = address.match(/[a-fA-F0-9]{4}$/);
            return `${start}...${end}`;
        }
    };

    const formatBalance = (balance) => {
        if (balance === '0') {
            return balance.replace(/^0$/, `${balance}.000`);
        } else {
            return balance.match(/\d+\.\d{3}/);
        }
    };

    if (isConnected) {
        return (
            <>
                {data && (
                    <Typography sx={{ mr: 2 }}>
                        {formatBalance(data.formatted)}
                    </Typography>
                )}
                {address && <Typography>{formatAddress(address)}</Typography>}
            </>
        );
    } else {
        return <Typography>Connect Wallet</Typography>;
    }
};
