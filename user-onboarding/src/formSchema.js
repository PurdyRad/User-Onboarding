import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string().trim().required('User must have a name').min(1, 'User name must be at least 1 character long'),
    email: yup.string().email('Must be a valid email address').required('Email is required'),
    password: yup.string().required('User must have a secure password').min(6, 'Password must contain at least 6 characters').matches(/[a-zA-Z]/, 'Password can only contain Latin characters'),
    terms: yup.boolean().oneOf([true], 'User must eggcept Terms and Conditions')
});
export default formSchema