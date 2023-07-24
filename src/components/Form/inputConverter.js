export const inputConverter = (id, value, setValue) => {
    if (id === 'address') {
        const address = value.match(/^(?:0x[a-fA-F0-9]{0,40})|0/);

        const reAddress = address?.[0] ? address?.[0] : '';

        setValue('address', reAddress);
    } else if (id === 'balance') {
        const balance = value.match(
            /^100000|((?:[1-9][0-9]{0,4}(?:\.[0-9]{0,6})?)|(?:[1-9][0-9]{0,4})|(?:0\.[0-9]{0,6})|0)/
        );

        const reBalance = balance?.[0] ? balance?.[0] : '';

        setValue('balance', reBalance);
    }
};
