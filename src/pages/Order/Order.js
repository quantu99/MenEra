import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getCart, getInfoDetail, updateOrderInfo } from '../../redux/apiRequest';
import validation from './validation';
const cx = classNames.bind(styles);
function Order() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = user?._id;
    const carts = useSelector((state) => state.auth.getCart?.cart);
    const infoDetail = useSelector((state) => state.auth.getInfoDetail?.infoDetail);
    const totalPrice = carts?.reduce((accumulator, cart) => accumulator + cart.price, 0);
    const allUsers = useSelector((state) => state.user.getAllUsers?.allUsers);
    const allUserEmail = allUsers?.map((user) => user.email);
    const [emailError, setEmailError] = useState(false);
    const [valid, setValid] = useState(false);
    const [errors, setErrors] = useState({});
    useEffect(() => {
        getAllUsers(dispatch);
        // eslint-disable-next-line
    }, []);
    const checkEmail = (email) => {
        if (allUserEmail.includes(email)) {
            return setEmailError(true);
        }
    };
    useEffect(() => {
        getInfoDetail(id, dispatch);
    }, [user]);
    useEffect(() => {
        getCart(id, dispatch);
    }, []);
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    // validate
    const [values, setValues] = useState({
        email: infoDetail && infoDetail.email ? infoDetail.email : '',
        firstname: infoDetail && infoDetail.firstname ? infoDetail.firstname : '',
        lastname: infoDetail && infoDetail.lastname ? infoDetail.lastname : '',
        address: infoDetail && infoDetail.address ? infoDetail.address : '',
        phone: infoDetail && infoDetail.phone ? infoDetail.phone : '',
    });
    useEffect(() => {
        const isValid =
            values.email !== '' &&
            /\S+@\S+\.\S+/.test(values.email) &&
            !values.email.includes("'") &&
            values.email.indexOf(' ') === -1 &&
            values.firstname !== '' &&
            values.lastname !== '' &&
            values.address !== '' &&
            values.phone !== '' &&
            /^\d+$/.test(values.phone) &&
            !/^0/.test(values.phone);
        setValid(isValid);
    }, [values]);
    console.log(valid);
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        setErrors({});
    };
    const handleOrder = async () => {
        const newInfo = {
            email: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            address: values.address,
            phone: values.phone,
        };
        setErrors(validation(values));
        checkEmail(newInfo.email);
        if (valid) {
            await updateOrderInfo(id, dispatch, navigate, newInfo);
        }
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            {infoDetail && (
                <div className={cx('container', 'row', 'no-gutters')}>
                    <div className={cx('left-div', 'col', 'l-7')}>
                        <Link to={'/'} className={cx('logo-div')}>
                            <img src={logo} alt="logo" className={cx('logo-image')} />
                            <h1 className={cx('logo-title')}>Men's Era</h1>
                        </Link>
                        <div className={cx('info-div')}>
                            <div className={cx('navigate-div')}>
                                <p
                                    style={{ fontWeight: '500', textDecoration: 'underline' }}
                                    className={cx('navigate-para')}
                                >
                                    Information
                                </p>
                                <FontAwesomeIcon className={cx('navigate-icon')} icon={faChevronRight} />
                                <Link className={cx('navigate-para')}>Shipping</Link>
                                <FontAwesomeIcon className={cx('navigate-icon')} icon={faChevronRight} />
                                <p className={cx('navigate-para')}>Payment</p>
                            </div>
                            <div className={cx('contact-div')}>
                                <p className={cx('contact-title')}>Contact</p>
                                <div className={cx('input-div')}>
                                    <label htmlFor="email" className={cx('contact-input-label')}>
                                        Email
                                    </label>
                                    {infoDetail && (
                                        <input
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            className={cx('contact-input')}
                                            placeholder="Email"
                                            value={values?.email}
                                        />
                                    )}
                                    {!infoDetail && (
                                        <input
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            className={cx('contact-input')}
                                            placeholder="Email"
                                        />
                                    )}
                                </div>
                                {errors.email && <p className={cx('error-msg')}>{errors.email}</p>}
                            </div>
                            <div className={cx('shipping-address-div')}>
                                <p className={cx('shipping-address-title')}>Shipping address</p>
                                <div className={cx('full-name-div')}>
                                    <div className={cx('first-name')}>
                                        <div className={cx('shipping-address-input-div')}>
                                            <label className={cx('shipping-address-input-label')}>First name</label>
                                            <input
                                                onChange={handleChange}
                                                name="firstname"
                                                value={values?.firstname}
                                                className={cx('shipping-address-input')}
                                                placeholder="First name"
                                            />
                                        </div>
                                        {errors.firstname && <p className={cx('error-msg')}>{errors.firstname}</p>}
                                    </div>
                                    <div className={cx('last-name')}>
                                        <div className={cx('shipping-address-input-div')}>
                                            <label className={cx('shipping-address-input-label')}>Last name</label>
                                            <input
                                                onChange={handleChange}
                                                value={values?.lastname}
                                                name="lastname"
                                                className={cx('shipping-address-input')}
                                                placeholder="Last name"
                                            />
                                        </div>
                                        {errors.lastname && <p className={cx('error-msg')}>{errors.lastname}</p>}
                                    </div>
                                </div>
                                <div className={cx('shipping-address-input-div')}>
                                    <label className={cx('shipping-address-input-label')}>Address</label>
                                    <input
                                        onChange={handleChange}
                                        value={values?.address}
                                        name="address"
                                        className={cx('shipping-address-input')}
                                        placeholder="Address"
                                    />
                                </div>
                                {errors.address && <p className={cx('error-msg')}>{errors.address}</p>}
                                <div className={cx('shipping-address-input-div')}>
                                    <label className={cx('shipping-address-input-label')}>Phone</label>
                                    <input
                                        onChange={handleChange}
                                        value={values?.phone.toLocaleString()}
                                        name="phone"
                                        className={cx('shipping-address-input')}
                                        placeholder="Phone number"
                                    />
                                </div>
                                {errors.phone && <p className={cx('error-msg')}>{errors.phone}</p>}
                            </div>
                            <div className={cx('footer-div')}>
                                <Link to={'/'} className={cx('footer-return')}>
                                    <FontAwesomeIcon className={cx('footer-icon')} icon={faChevronLeft} />
                                    <p className={cx('footer-para')}>Return to Home</p>
                                </Link>
                                <Link>
                                    <button onClick={handleOrder} className={cx('btn')}>
                                        Continue to shipping
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-div', 'col', 'l-5')}>
                        <div className={cx('product-container', 'order-product-container')}>
                            {carts?.map((cart, index) => (
                                <div key={index} className={cx('product-div')}>
                                    <img className={cx('product-image')} src={cart.imageUrl} alt="product-image" />
                                    <div className={cx('product-info')}>
                                        <div className={cx('name-color')}>
                                            <p className={cx('name')}>{capitalizeString(cart.name)}</p>
                                            <p className={cx('color')}>{capitalizeString(cart.color)}</p>
                                        </div>
                                        <p className={cx('price')}>
                                            {cart.price.toLocaleString()}
                                            <span style={{ textDecoration: 'underline' }}>đ</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cx('total-div')}>
                            <p className={cx('total-title')}>Total:</p>
                            <p className={cx('total-price')}>
                                {totalPrice?.toLocaleString()}
                                <span style={{ textDecoration: 'underline' }}>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {!infoDetail && (
                <div className={cx('container', 'row', 'no-gutters')}>
                    <div className={cx('left-div', 'col', 'l-7')}>
                        <Link to={'/'} className={cx('logo-div')}>
                            <img src={logo} alt="logo" className={cx('logo-image')} />
                            <h1 className={cx('logo-title')}>Men's Era</h1>
                        </Link>
                        <div className={cx('info-div')}>
                            <div className={cx('navigate-div')}>
                                <p
                                    style={{ fontWeight: '500', textDecoration: 'underline' }}
                                    className={cx('navigate-para')}
                                >
                                    Information
                                </p>
                                <FontAwesomeIcon className={cx('navigate-icon')} icon={faChevronRight} />
                                <Link className={cx('navigate-para')}>Shipping</Link>
                                <FontAwesomeIcon className={cx('navigate-icon')} icon={faChevronRight} />
                                <p className={cx('navigate-para')}>Payment</p>
                            </div>
                            <div className={cx('contact-div')}>
                                <p className={cx('contact-title')}>Contact</p>
                                <div className={cx('input-div')}>
                                    <label htmlFor="email" className={cx('contact-input-label')}>
                                        Email
                                    </label>
                                    {infoDetail && (
                                        <input
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            className={cx('contact-input')}
                                            placeholder="Email"
                                            value={values?.email}
                                        />
                                    )}
                                    {!infoDetail && (
                                        <input
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            className={cx('contact-input')}
                                            placeholder="Email"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className={cx('shipping-address-div')}>
                                <p className={cx('shipping-address-title')}>Shipping address</p>
                                <div className={cx('full-name-div')}>
                                    <div className={cx('shipping-address-input-div', 'first-name')}>
                                        <label className={cx('shipping-address-input-label')}>First name</label>
                                        <input
                                            onChange={handleChange}
                                            name="firstname"
                                            className={cx('shipping-address-input')}
                                            placeholder="First name"
                                        />
                                    </div>
                                    <div className={cx('shipping-address-input-div', 'last-name')}>
                                        <label className={cx('shipping-address-input-label')}>Last name</label>
                                        <input
                                            onChange={handleChange}
                                            name="lastname"
                                            className={cx('shipping-address-input')}
                                            placeholder="Last name"
                                        />
                                    </div>
                                </div>
                                <div className={cx('shipping-address-input-div')}>
                                    <label className={cx('shipping-address-input-label')}>Address</label>
                                    <input
                                        onChange={handleChange}
                                        name="address"
                                        className={cx('shipping-address-input')}
                                        placeholder="Address"
                                    />
                                </div>
                                <div className={cx('shipping-address-input-div')}>
                                    <label className={cx('shipping-address-input-label')}>Phone</label>
                                    <input
                                        onChange={handleChange}
                                        name="phone"
                                        className={cx('shipping-address-input')}
                                        placeholder="Phone number"
                                    />
                                </div>
                            </div>
                            <div className={cx('footer-div')}>
                                <Link to={'/'} className={cx('footer-return')}>
                                    <FontAwesomeIcon className={cx('footer-icon')} icon={faChevronLeft} />
                                    <p className={cx('footer-para')}>Return to Home</p>
                                </Link>
                                <Link>
                                    <button onClick={handleOrder} className={cx('btn')}>
                                        Continue to shipping
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-div', 'col', 'l-5')}>
                        <div className={cx('product-container', 'order-product-container')}>
                            {carts?.map((cart, index) => (
                                <div key={index} className={cx('product-div')}>
                                    <img className={cx('product-image')} src={cart.imageUrl} alt="product-image" />
                                    <div className={cx('product-info')}>
                                        <div className={cx('name-color')}>
                                            <p className={cx('name')}>{capitalizeString(cart.name)}</p>
                                            <p className={cx('color')}>{capitalizeString(cart.color)}</p>
                                        </div>
                                        <p className={cx('price')}>
                                            {cart.price.toLocaleString()}
                                            <span style={{ textDecoration: 'underline' }}>đ</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cx('total-div')}>
                            <p className={cx('total-title')}>Total:</p>
                            <p className={cx('total-price')}>
                                {totalPrice?.toLocaleString()}
                                <span style={{ textDecoration: 'underline' }}>đ</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Order;
