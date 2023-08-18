import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getInfoDetail, updateOrderInfo } from '../../redux/apiRequest';
const cx = classNames.bind(styles);
function Order() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = user?._id;
    const carts = useSelector((state) => state.auth.getCart?.cart);
    const infoDetail = useSelector((state) => state.auth.getInfoDetail?.infoDetail);
    const totalPrice = carts?.reduce((accumulator, cart) => accumulator + cart.price, 0);
    useEffect(() => {
        getInfoDetail(id, dispatch);
    }, []);
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
        email: `${infoDetail?.email}`,
        firstname: `${infoDetail?.firstname}`,
        lastname: `${infoDetail?.lastname}`,
        address: `${infoDetail?.address}`,
        phone: infoDetail && infoDetail.phone ? infoDetail.phone : '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleOrder = () => {
        const newInfo = {
            email: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            address: values.address,
            phone: values.phone,
        };
        updateOrderInfo(id, dispatch, navigate, newInfo);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
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
                                <input
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    className={cx('contact-input')}
                                    placeholder="Email"
                                    value={values?.email}
                                />
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
                                        value={values?.firstname}
                                        className={cx('shipping-address-input')}
                                        placeholder="First name"
                                    />
                                </div>
                                <div className={cx('shipping-address-input-div', 'last-name')}>
                                    <label className={cx('shipping-address-input-label')}>Last name</label>
                                    <input
                                        onChange={handleChange}
                                        value={values?.lastname}
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
                                    value={values?.address}
                                    name="address"
                                    className={cx('shipping-address-input')}
                                    placeholder="Address"
                                />
                            </div>
                            <div className={cx('shipping-address-input-div')}>
                                <label className={cx('shipping-address-input-label')}>Phone</label>
                                <input
                                    onChange={handleChange}
                                    value={values?.phone}
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
        </div>
    );
}

export default Order;
