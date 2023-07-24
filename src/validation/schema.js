import * as yup from 'yup';
import { regExp } from './regExp';

const { address, balance } = regExp;

export const schema = yup.object().shape({
    address: yup
        .string()
        .matches(address, 'Wrong format: 0x(40 digits a-f, A-F, 0-9)')
        .required(),
    balance: yup
        .string()
        .matches(
            balance,
            'Please fill correct value: min 0.000001 - 100000 max'
        )
        .required(),
});
