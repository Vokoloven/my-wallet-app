const address = /^0x[a-fA-F0-9]{40}$/;
const balance =
    /(^100000$)|(^[1-9][0-9]{0,4}$|^[1-9][0-9]{0,4}\.\d{1,6}$)|(0\.[1-9]$)|(0\.[0-9][1-9]$)|(0\.[0-9][0-9][1-9]$)|(0\.[0-9][0-9][0-9][1-9]$)|(0\.[0-9][0-9][0-9][0-9][1-9]$)|(0\.[0-9][0-9][0-9][0-9][0-9][1-9]$)/;

export const regExp = { address, balance };
