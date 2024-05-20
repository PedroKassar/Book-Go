import { object, string, ref } from "yup"

export const signUpSchema = object().shape({
    confirmPassword: string().oneOf([ref('password'), null], 'Password must match').required("*"),
    password: string().required('*').min(6, 'Password must have at least 6 characters'),
    email: string().required('*').email('Not a valid email'),
})