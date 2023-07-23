import * as yup from 'yup';
import { regExp } from './regExp';

const { address, balance } = regExp;

export const schema = yup.object().shape({
    address: yup
        .string()
        .matches(address, 'Wrong format: 0x(40 digits)')
        .required(),
    balance: yup
        .string()
        .matches(balance, 'Please fill correct value, at least(x.x)')
        .required(),
});
