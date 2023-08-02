const validation = (values) => {
    let errors = {};
    if (!values.username) {
        errors.username = 'This field is required';
    }
    if (!values.password) {
        errors.password = 'This field is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be more than 6 characters';
    }
    return errors;
};
export default validation;
