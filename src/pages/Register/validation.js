const validation = (values) => {
    let errors = {};
    if (!values.firstname) {
        errors.firstname = 'This field is required';
    }
    if (!values.lastname) {
        errors.lastname = 'This field is required';
    }
    if (!values.address) {
        errors.address = 'This field is required';
    }
    if (!values.username) {
        errors.username = 'This field is required';
    }
    if (!values.email) {
        errors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid, please check again( ex: mrAbc@gmail.com,...)';
    }
    if (!values.password) {
        errors.password = 'This field is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password must be more than 6 characters';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Confirm password is not correct, please check again !';
    }
    return errors;
};
export default validation;
