const validationpayment = (values) => {
    let errors = {};
    if (!values.cardNumber) {
        errors.cardNumber = 'This field is required';
    } else if (!/^\d+$/.test(values.cardNumber)) {
        errors.cardNumber = 'Card number must be number';
    } else if (values.cardNumber.toString().length !== 16) {
        errors.cardNumber = 'Card number must contain 16 numbers';
    }
    if (!values.cardMonth) {
        errors.cardMonth = 'This field is required';
    } else if (!/^\d+$/.test(values.cardMonth)) {
        errors.cardMonth = 'Month must be number';
    } else if (parseInt(values.cardMonth) < 1 || parseInt(values.cardMonth) > 12) {
        errors.cardMonth = 'Invalid month, please check again';
    }
    if (!values.cardYear) {
        errors.cardYear = 'This field is required';
    } else if (!/^\d+$/.test(values.cardYear)) {
        errors.cardYear = 'Year must be number';
    } else if (parseInt(values.cardYear) < 2023) {
        errors.cardYear = 'Invalid year, please check again';
    }
    if (!values.cvv) {
        errors.cvv = 'This field is required';
    } else if (!/^\d+$/.test(values.cvv)) {
        errors.cvv = 'Cvv must be number';
    } else if (values.cvv.toString().length !== 3) {
        errors.cvv = 'Cvv must contain 3 numbers';
    }
    return errors;
};
export default validationpayment;
