import * as yup from 'yup';
import { regExp } from './regExp';

const { address, balance } = regExp;

export const schema = yup.object().shape({
    address: yup
        .string()
        .matches(address, 'Address format: 0x(40digits)')
        .required(),
    balance: yup.string().matches(balance, 'Format should be x.x').required(),
});
