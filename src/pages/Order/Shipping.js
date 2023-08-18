import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import logo from '../../image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../redux/apiRequest';
const cx = classNames.bind(styles);
function Shipping() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const [shipPrice, setShipPrice] = useState(40000);
    const id = user?._id;
    const carts = useSelector((state) => state.auth.getCart?.cart);
    const subTotalPrice = carts?.reduce((accumulator, cart) => accumulator + cart.price, 0);
    const totalPrice = shipPrice + subTotalPrice;
    useEffect(() => {
        getCart(id, dispatch);
    }, []);
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    const email = user?.email;
    const address = user?.address;
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
                            <p
                                style={{ fontWeight: '500', textDecoration: 'underline' }}
                                className={cx('navigate-para')}
                            >
                                Shipping
                            </p>
                            <FontAwesomeIcon className={cx('navigate-icon')} icon={faChevronRight} />
                            <Link className={cx('navigate-para')}>Payment</Link>
                        </div>
                        <div className={cx('contact-div')}>
                            <p className={cx('contact-title')}>Information</p>
                            <div className={cx('shipping-div')}>
                                <div className={cx('shipping-div-child', 'shipping-div-child-email')}>
                                    <p className={cx('shipping-title')}>Contact</p>
                                    <div className={cx('value-change')}>
                                        <p className={cx('shipping-value')}>{email}</p>
                                        <Link to={'/order-info'} className={cx('change')}>
                                            Change
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx('shipping-div-child')}>
                                    <p className={cx('shipping-title')}>Ship to</p>
                                    <div className={cx('value-change')}>
                                        <p className={cx('shipping-value')}>{address}</p>
                                        <Link to={'/order-info'} className={cx('change')}>
                                            Change
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('shipping-address-div')}>
                            <p className={cx('shipping-address-title')}>Shipping method</p>

                            <div className={cx('shipping-address-input-div', 'shipping-method')}>
                                <div className={cx('shipping-method-left')}>
                                    <FontAwesomeIcon className={cx('shipping-method-icon')} icon={faCircleDot} />
                                    <p className={cx('shipping-address-input-label', 'shipping-method-title')}>
                                        J&T Express
                                    </p>
                                </div>
                                <p className={cx('shipping-method-price')}>{shipPrice.toLocaleString()}đ</p>
                            </div>
                        </div>
                        <div className={cx('footer-div')}>
                            <Link to={'/order-info'} className={cx('footer-return')}>
                                <FontAwesomeIcon className={cx('footer-icon')} icon={faChevronLeft} />
                                <p className={cx('footer-para')}>Return to Information</p>
                            </Link>
                            <Link to={'/order-payment'}>
                                <button className={cx('btn')}>Continue to Payment</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('right-div', 'col', 'l-5')}>
                    <div className={cx('product-container')}>
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

export default Shipping;
