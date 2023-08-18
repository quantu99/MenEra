import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getInfoDetail, updateOrderInfo, updatePaymentInfo } from '../../redux/apiRequest';
const cx = classNames.bind(styles);
function OrderDone() {
    const [shipPrice, setShipPrice] = useState(40000);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = user?._id;
    const carts = useSelector((state) => state.auth.getCart?.cart);
    const subTotalPrice = carts?.reduce((accumulator, cart) => accumulator + cart.price, 0);
    const totalPrice = shipPrice + subTotalPrice;
    const infoDetail = useSelector((state) => state.auth.getInfoDetail?.infoDetail);
    useEffect(() => {
        getInfoDetail(id, dispatch);
    }, []);
    const email = infoDetail?.email;
    const address = infoDetail?.address;
    useEffect(() => {
        getCart(id, dispatch);
    }, []);
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    // set validate
    const [values, setValues] = useState({
        cardNumber: infoDetail?.cardNumber,
        cardMonth: infoDetail?.cardMonth,
        cardYear: infoDetail?.cardYear,
        cvv: infoDetail?.cvv,
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleOrder = () => {
        const newInfo = {
            cardNumber: values.cardNumber,
            cardMonth: values.cardMonth,
            cardYear: values.cardYear,
            cvv: values.cvv,
        };
        updatePaymentInfo(id, dispatch, newInfo);
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
                            <Link to={'/order-info'} className={cx('navigate-para')}>
                                Information
                            </Link>
                            <FontAwesomeIcon className={cx('navigate-icon')} icon={faChevronRight} />
                            <Link to={'/order-shipping'} className={cx('navigate-para')}>
                                Shipping
                            </Link>
                            <FontAwesomeIcon className={cx('navigate-icon')} icon={faChevronRight} />
                            <p
                                style={{ fontWeight: '500', textDecoration: 'underline' }}
                                className={cx('navigate-para')}
                            >
                                Payment
                            </p>
                        </div>
                        <div className={cx('contact-div')}>
                            <p className={cx('contact-title')}>Information</p>
                            <div className={cx('shipping-div')}>
                                <div className={cx('shipping-div-child', 'shipping-div-child-email')}>
                                    <p className={cx('shipping-title')}>Contact</p>
                                    <div className={cx('value-change')}>
                                        <p className={cx('shipping-value')}>{email}</p>
                                    </div>
                                </div>
                                <div className={cx('shipping-div-child', 'shipping-div-child-shipto')}>
                                    <p className={cx('shipping-title')}>Ship to</p>
                                    <div className={cx('value-change')}>
                                        <p className={cx('shipping-value')}>{address}</p>
                                    </div>
                                </div>
                                <div className={cx('shipping-div-child')}>
                                    <p className={cx('shipping-title')}>Method</p>
                                    <div className={cx('value-change')}>
                                        <p className={cx('shipping-value')}>J&T Express</p>
                                        <p className={cx('shipping-price')}>
                                            {shipPrice.toLocaleString()}
                                            <span style={{ textDecoration: 'underline' }}>đ</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('payment-div')}>
                            <p className={cx('payment-title')}>Payment</p>
                            <p className={cx('payment-note')}>All transactions are secured and encrypted.</p>
                            <div className={cx('payment-info-div')}>
                                <div className={cx('payment-info-header')}>
                                    <p className={cx('header-title')}>Credit Card</p>
                                    <img
                                        src="https://webservices.global-e.com/content/images/paymentMethods/pm.svg"
                                        className={cx('header-image')}
                                    />
                                </div>
                                <div className={cx('payment-options')}>
                                    <img
                                        className={cx('payment-options-image')}
                                        src="https://cdn.shopify.com/s/files/1/0052/8164/4662/files/payment_5331d170-aa8c-4a49-9b5d-ea6411b23c75.png?v=1613544399"
                                    />
                                    <p className={cx('payment-options-para')}>And many more...</p>
                                </div>
                                <div className={cx('payment-card-info')}>
                                    <div className={cx('payment-card-input-div', 'card-number')}>
                                        <input
                                            disabled
                                            onChange={handleChange}
                                            name="cardNumber"
                                            value={values?.cardNumber}
                                            placeholder="Card number "
                                            className={cx('payment-card-input')}
                                        />
                                        <img
                                            className={cx('card-number-image')}
                                            src="https://webservices.global-e.com/content/images/paymentMethods/pm.svg"
                                        />
                                    </div>
                                    <div className={cx('payment-card-date')}>
                                        <div className={cx('payment-card-input-div', 'month')}>
                                            <input
                                                disabled
                                                onChange={handleChange}
                                                name="cardMonth"
                                                value={values?.cardMonth}
                                                placeholder="Month"
                                                className={cx('payment-card-input')}
                                            />
                                        </div>
                                        <div className={cx('payment-card-input-div', 'year')}>
                                            <input
                                                disabled
                                                onChange={handleChange}
                                                name="cardYear"
                                                value={values?.cardYear}
                                                placeholder="Year"
                                                className={cx('payment-card-input')}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('payment-card-last')}>
                                        <div className={cx('payment-card-input-div', 'cvv')}>
                                            <input
                                                disabled
                                                onChange={handleChange}
                                                name="cvv"
                                                value={values?.cvv}
                                                placeholder="CVV"
                                                className={cx('payment-card-input')}
                                            />
                                        </div>
                                        <p className={cx('payment-card-last-para')}>
                                            3 or 4 digits usually found on the signature strip
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className={cx('verify-para')}>
                            Please check your contact and payment information again. If they're all clear, click "Order
                            now" to complete your order.
                        </p>
                        <div className={cx('footer-div')}>
                            <Link to={'/order-shipping'} className={cx('footer-return')}>
                                <FontAwesomeIcon className={cx('footer-icon')} icon={faChevronLeft} />
                                <p className={cx('footer-para')}>Return to Shipping</p>
                            </Link>
                            <Link onClick={handleOrder}>
                                <button className={cx('btn')}>Order now</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('right-div', 'col', 'l-5')}>
                    <div className={cx('product-container', 'payment-product-container')}>
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
                    <div className={cx('bonus')}>
                        <div className={cx('subtotal-price-div')}>
                            <p className={cx('bonus-title')}>Subtotal:</p>
                            <p className={cx('bonus-price')}>
                                {subTotalPrice?.toLocaleString()}
                                <span style={{ textDecoration: 'underline' }}>đ</span>
                            </p>
                        </div>
                        <div className={cx('ship-price-div')}>
                            <p className={cx('bonus-title')}>Ship:</p>
                            <p className={cx('bonus-price')}>
                                {shipPrice.toLocaleString()}
                                <span style={{ textDecoration: 'underline' }}>đ</span>
                            </p>
                        </div>
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

export default OrderDone;
