import styles from './WishList.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faXmark, faGear } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromWish, getWish } from '../../redux/apiRequest';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function WishList() {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.auth.getWish?.wishlist);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userId = user?._id;
    useEffect(() => {
        getWish(userId, dispatch);
    }, [wishlist]);
    const handleRemoveWish = (id) => {
        deleteFromWish(id, userId, dispatch);
    };
    const handleAddProduct = (id) => {
        addToCart(id, userId, dispatch);
    };
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('intro')}>
                <div className={cx('intro-para-div')}>
                    <p className={cx('intro-para-navigate')}>
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>
                            <span className={cx('home')}>Home</span>
                        </Link>{' '}
                        <FontAwesomeIcon className={cx('intro-para-navigate-icon')} icon={faChevronRight} />{' '}
                        <span className={cx('shoes')}>Wishlist</span>
                    </p>
                </div>
                <p className={cx('wishlist-title')}>Wishlist</p>
            </div>
            <div className={cx('grid', 'container')}>
                {user && (
                    <>
                        {wishlist && (
                            <>
                                {wishlist.length >= 1 && (
                                    <div className={cx('body', 'row', 'no-gutters')}>
                                        {wishlist?.map((product, index) => (
                                            <>
                                                <div key={index} className={cx('product-div', 'col', 'l-3')}>
                                                    <FontAwesomeIcon
                                                        onClick={() => handleRemoveWish(product._id)}
                                                        className={cx('icon')}
                                                        icon={faXmark}
                                                    />
                                                    <Link style={{ textDecoration: 'none' }} to={`/${product._id}`}>
                                                        <img className={cx('feature-image')} src={product.imageUrl} />
                                                        <div className={cx('top-detail')}>
                                                            <p className={cx('product-name')}>
                                                                {capitalizeString(product.name)}
                                                            </p>
                                                            <p className={cx('product-price')}>
                                                                {product.price.toLocaleString()}đ
                                                            </p>
                                                        </div>
                                                        <p className={cx('product-color')}>
                                                            {capitalizeString(product.color)}
                                                        </p>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleAddProduct(product._id)}
                                                        className={cx('btn')}
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                )}
                                {wishlist.length === 0 && (
                                    <div className={cx('empty-wrapper')}>
                                        <p className={cx('empty-para')}>Your wishlist is empty. Add something now.</p>
                                    </div>
                                )}
                            </>
                        )}
                        {!wishlist && (
                            <div className={cx('no-products-div')}>
                                <p className={cx('no-products-para')}>
                                    Please wait a moment, sorry for the inconvenience.
                                </p>
                                <FontAwesomeIcon className={cx('no-products-icon')} icon={faGear} />
                            </div>
                        )}
                    </>
                )}
                {!user && (
                    <div className={cx('no-user-wrapper', 'row', 'no-gutters')}>
                        <p className={cx('no-user-para', 'col', 'l-12')}>
                            Please{' '}
                            <Link to={'/login'} className={cx('no-user-span')}>
                                Sign in
                            </Link>{' '}
                            to add products into Wishlist. If this is your first time on our site, you can{' '}
                            <Link to={'/register'} className={cx('no-user-span')}>
                                Register
                            </Link>{' '}
                            now
                        </p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default WishList;
