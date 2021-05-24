import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    username: yup.string().min(5, 'username must be at least 3 characters').required('Username and password fields are required.'),
    password: yup.string().min(8, 'password must be at least 8 characters').required('Username and password fields are required.'),
    role: yup.string().oneOf(['instructor, client']).required('Role is required.')
})