export const inputConverter = (id, value, setValue) => {
    if (id === 'address') {
        const address = value
            .replace(/[^\w]/gi, '')
            .match(/(?:0x?)([a-fA-F0-9]{0,40})/);

        console.log(address);
        const reAddress = address?.[0] ? address?.[0] : '';
        setValue('address', reAddress);
    } else if (id === 'balance') {
        const balance = value.match(
            /^100000|((?:[1-9][0-9]{0,4}(?:\.[0-9]{0,6})?)|(?:[1-9][0-9]{0,4})|(?:0\.[0-9]{0,6})|0)/
        );

        console.log(balance);

        const reBalance = balance?.[0] ? balance?.[0] : '';

        //+ (balance?.[2] ? '' : '.');
        setValue('balance', reBalance);
    }
};
