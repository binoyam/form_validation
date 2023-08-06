import * as Yup from 'yup';

const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export const signup_schema = Yup.object({
    name: Yup.string().min(3).required("Please enter your name."),
    email: Yup.string().email("Please enter valid emali.").required("Please enter your email."),
    password: Yup.string().matches(passwordRegex, "Please enter valid password.").required("Please enter your password."),
    cpassword: Yup.string().oneOf([Yup.ref("password")], "Password does NOT match!").required("Please confirm your password.")
});