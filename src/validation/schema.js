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
        .matches(balance, 'Wrong format: x.xxx(3 digits after ".")')
        .required(),
});
