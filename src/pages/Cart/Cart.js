import { useDispatch, useSelector } from 'react-redux';
import styles from './Cart.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { deleteFromCart, getCart } from '../../redux/apiRequest';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Cart() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = user?._id;
    const carts = useSelector((state) => state.auth.getCart?.cart);
    const totalPrice = carts?.reduce((accumulator, cart) => accumulator + cart.price, 0);
    useEffect(() => {
        getCart(id, dispatch);
    }, [carts]);
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    const handleRemove = (productId) => {
        deleteFromCart(productId, id, dispatch);
    };
    return (
        <>
            {user && (
                <div className={cx('wrapper')}>
                    <h1 className={cx('title')}>Cart ({carts?.length})</h1>
                    {carts && (
                        <>
                            {carts?.length >= 1 && (
                                <div className={cx('container-wrapper')}>
                                    {carts?.map((cart, index) => (
                                        <div key={index} className={cx('container', 'row', 'no-gutters')}>
                                            <div className={cx('cart-div', 'col', 'l-12')}>
                                                <img className={cx('image')} src={cart?.imageUrl} />
                                                <div className={cx('info-div')}>
                                                    <p className={cx('name')}>{capitalizeString(cart?.name)}</p>
                                                    <p className={cx('price')}>
                                                        {cart.price.toLocaleString()}
                                                        <span style={{ textDecoration: 'underline' }}>đ</span>
                                                    </p>
                                                    <div className={cx('color-remove')}>
                                                        <p className={cx('color')}>{capitalizeString(cart?.color)}</p>
                                                        <p
                                                            onClick={() => handleRemove(cart?._id)}
                                                            className={cx('remove')}
                                                        >
                                                            Remove
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {carts?.length === 0 && (
                                <div className={cx('container-wrapper', 'wrapper-no-carts')}>
                                    <p>Your cart is empty. Add something now</p>
                                </div>
                            )}
                        </>
                    )}
                    {!carts && (
                        <div className={cx('container-wrapper', 'no-carts')}>
                            <p className={cx('no-carts-para')}>
                                Please wait a moment, sorry for the inconvenience{' '}
                                <FontAwesomeIcon className={cx('no-carts-icon')} icon={faGear} />
                            </p>
                        </div>
                    )}

                    <div className={cx('footer', 'row', 'no-gutters')}>
                        <div className={cx('footer-div', 'col', 'l-12')}>
                            <p className={cx('total-price')}>
                                <span style={{ textDecoration: 'underline' }}>Total</span>:{' '}
                                {totalPrice?.toLocaleString()}đ
                            </p>
                            {carts.length >= 1 && (
                                <Link to={'/order-info'}>
                                    <button className={cx('btn')}>Order now</button>
                                </Link>
                            )}
                            {carts.length === 0 && (
                                <Link to={'/all-shoes'}>
                                    <button className={cx('btn')}>Continue shopping</button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {!user && (
                <div className={cx('wrapper')}>
                    <h1 className={cx('title')}>Cart</h1>
                    <div className={cx('notification')}>
                        <p className={cx('login')}>
                            <Link to={'/login'} className={cx('noti-span')}>
                                Login
                            </Link>{' '}
                            to manage your cart
                        </p>
                        <p>or</p>
                        <p className={cx('register')}>
                            If this is your first time on our site, you can{' '}
                            <Link to={'/register'} className={cx('noti-span')}>
                                register
                            </Link>{' '}
                            now
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
