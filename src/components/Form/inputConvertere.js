export const inputConverter = (id, value, setValue) => {
    if (id === 'address') {
        const address = value
            .replace(/[^\w]/gi, '')
            .match(/^(0x)([a-fA-F0-9]{0,40})/);
        const reAddress = '0x' + (address?.[2] ? address?.[2] : '');
        setValue('address', reAddress);
    } else if (id === 'balance') {
        const balance = value.replace(/[^\d]/gi, '').match(/([\d])(\d{0,3})/);
        const reBalance =
            (balance?.[1] ? balance[1] : '') +
            '.' +
            (balance?.[2] ? balance[2] : '');

        setValue('balance', reBalance);
    }
};
