import styles from './WishList.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromWish, getWish } from '../../redux/apiRequest';
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
                {wishlist && (
                    <div className={cx('body', 'row', 'no-gutters')}>
                        {wishlist?.map((product, index) => (
                            <Link
                                key={index}
                                style={{ textDecoration: 'none' }}
                                // to={`/${product._id}`}
                                className={cx('product-div', 'col', 'l-3')}
                            >
                                <FontAwesomeIcon
                                    onClick={() => handleRemoveWish(product._id)}
                                    className={cx('icon')}
                                    icon={faXmark}
                                />
                                <img className={cx('feature-image')} src={product.imageUrl} />
                                <div className={cx('top-detail')}>
                                    <p className={cx('product-name')}>{capitalizeString(product.name)}</p>
                                    <p className={cx('product-price')}>{product.price.toLocaleString()}đ</p>
                                </div>
                                <p className={cx('product-color')}>{capitalizeString(product.color)}</p>
                            </Link>
                        ))}
                    </div>
                )}
                {!wishlist && (
                    <div>
                        <p>Please wait...</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default WishList;
