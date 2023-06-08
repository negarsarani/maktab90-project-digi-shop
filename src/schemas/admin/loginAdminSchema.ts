import * as yup from 'yup';

const loginAdminSchema = yup.object().shape({
  username: yup
    .string()
    // .min(3, 'نام کاربری کوتاه است')
    .required('  نام کاربری الزامی می باشد'),
  password: yup
    .string()
    .required('  رمز عبور الزامی می باشد').
    min(8, 'رمز عبور کوتاه است')
    //  .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
export default loginAdminSchema;
