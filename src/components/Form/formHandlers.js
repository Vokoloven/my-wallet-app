import { inputConverter } from './inputConverter';

export const onSubmit = (setTransaction, setOpen, setError, data) => {
    setTransaction(data);
    setOpen(true);
    setError({});
};

export const onError = (setError, errors) => setError(errors);

export const handleChange = (setValue, e) => {
    const { id, value } = e.target;
    inputConverter(id, value, setValue);
};
