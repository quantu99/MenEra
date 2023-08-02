const validation = (values) => {
    let errors = {};
    if (!values.password) {
        errors.password = 'This field is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be more than 6 characters';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'This field is required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Confirm password is not correct, please check again !';
    }
    return errors;
};
export default validation;