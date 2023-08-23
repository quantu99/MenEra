const validation = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email is invalid, please check again( ex: mrAbc@gmail.com,...)';
    } else if (values.email.indexOf(' ') !== -1) {
        errors.email = 'Email must not have the empty space ';
    } else if (values.email.includes("'")) {
        errors.email = 'Email is invalid';
    }
    if (!values.firstname) {
        errors.firstname = 'This field is required';
    }
    if (!values.lastname) {
        errors.lastname = 'This field is required';
    }
    if (!values.address) {
        errors.address = 'This field is required';
    }
    if (!values.phone) {
        errors.phone = 'This field is required';
    } else if (!/^\d+$/.test(values.phone)) {
        errors.phone = 'Phone must be a number';
    } else if (/^0/.test(values.phone)) {
        errors.phone = 'Phone number must not start with 0, replace with 84 or available phone area code';
    }
    return errors;
};
export default validation;
