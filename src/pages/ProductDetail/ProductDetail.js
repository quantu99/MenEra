import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './ProductDetail.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { addToCart, addToWish, deleteFromWish, getAllProducts, getProductDetail } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart, faCircle as fasCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
const cx = classNames.bind(styles);
function ProductDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const productDetail = useSelector((state) => state.products.getProductDetail?.productDetail);
    const productType = productDetail?.type;
    const allProduct = useSelector((state) => state.products.getAllProducts?.allProducts);
    const productSuggest = allProduct?.filter((product) => product.type.every((type) => productType?.includes(type)));
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userId = user?._id;
    const addToCartLoading = useSelector((state) => state.products.addToCart?.isFetching);
    useEffect(() => {
        getProductDetail(dispatch, id);
    }, []);
    useEffect(() => {
        getAllProducts(dispatch);
    }, []);
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    const [heart, setHeart] = useState(false);
    const handleHeart = () => {
        setHeart(!heart);
    };
    const [currentPosition, setCurrentPosition] = useState(0);
    const containerRef = useRef(null);
    const scrollToNextProducts = () => {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const maxScrollPosition = container.scrollWidth - containerWidth;

        if (container.scrollLeft < maxScrollPosition) {
            setCurrentPosition(currentPosition + 1);
            container.scrollTo({
                left: container.scrollLeft + containerWidth,
                behavior: 'smooth',
            });
        }
    };
    const scrollToPrevProducts = () => {
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;

        if (container.scrollLeft > 0 && currentPosition > 0) {
            setCurrentPosition(currentPosition - 1);
            container.scrollTo({
                left: container.scrollLeft - containerWidth,
                behavior: 'smooth',
            });
        }
    };
    const handleClick = (id) => {
        getProductDetail(dispatch, id, navigate);
    };
    const handleAddToCart = (id) => {
        addToCart(id, userId, dispatch);
    };

    const handleAddToWish = (id) => {
        addToWish(id, userId, dispatch);
    };
    const handleRemoveFromWish = (id) => {
        deleteFromWish(id, userId, dispatch);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            {productDetail && (
                <div className={cx('container', 'row', 'no-gutters')}>
                    <div className={cx('image-div', 'col', 'l-6')}>
                        <img className={cx('image')} src={productDetail?.imageUrl} />
                        <img className={cx('image')} src={productDetail?.imageUrl2} />
                    </div>
                    <div className={cx('detail-div', 'col', 'l-6')}>
                        <h1 className={cx('name')}>{capitalizeString(productDetail?.name)}</h1>
                        <h1 className={cx('color')}>{capitalizeString(productDetail?.color)}</h1>
                        <h1 className={cx('price')}>
                            {productDetail?.price.toLocaleString()}
                            <span style={{ textDecoration: 'underline' }}>đ</span>
                        </h1>

                        <div className={cx('des-div')}>
                            <p className={cx('description-title')}>Description:</p>
                            <p className={cx('description')}>{productDetail?.description}</p>
                        </div>
                        <div className={cx('btn-div')}>
                            {user && (
                                <>
                                    {!addToCartLoading && (
                                        <button
                                            onClick={() => handleAddToCart(productDetail?._id)}
                                            className={cx('btn')}
                                        >
                                            Add to cart
                                        </button>
                                    )}
                                    {addToCartLoading && (
                                        <button
                                            onClick={() => handleAddToCart(productDetail?._id)}
                                            className={cx('btn', 'loading-btn')}
                                        >
                                            <p>Please wait...</p>
                                        </button>
                                    )}
                                </>
                            )}
                            {!user && (
                                <>
                                    <label htmlFor="checkbox-require-login" className={cx('btn')}>
                                        {' '}
                                        Add to cart
                                    </label>
                                    <input
                                        className={cx('checkbox-require-login')}
                                        id="checkbox-require-login"
                                        type="checkbox"
                                    />
                                    <div className={cx('require-login')}>
                                        <label htmlFor="checkbox-require-login">
                                            <FontAwesomeIcon className={cx('require-login-icon')} icon={faXmark} />
                                        </label>
                                        <p>
                                            Please{' '}
                                            <span className={cx('navigate-span')}>
                                                <Link style={{ color: 'inherit' }} to={'/login'}>
                                                    login
                                                </Link>
                                            </span>{' '}
                                            to manage your cart
                                        </p>
                                        <p className={cx('or')}>or</p>
                                        <p className={cx('navigate')}>
                                            If you are the New Customer, you can create your account in{' '}
                                            <span className={cx('navigate-span')}>
                                                <Link style={{ color: 'inherit' }} to={'/register'}>
                                                    here
                                                </Link>
                                            </span>
                                        </p>
                                    </div>
                                    <label
                                        htmlFor="checkbox-require-login"
                                        className={cx('overlay-require-login')}
                                    ></label>
                                </>
                            )}

                            {user && (
                                <>
                                    {!heart && (
                                        <div
                                            onClick={() => handleAddToWish(productDetail?._id)}
                                            className={cx('icon-div', 'fa-stack')}
                                        >
                                            <FontAwesomeIcon
                                                className={cx('fa-stack-2x', 'icon-circle')}
                                                icon={faCircle}
                                            />

                                            <FontAwesomeIcon
                                                style={{ color: ' #ad2126' }}
                                                onClick={handleHeart}
                                                className={cx('fa-stack-1x', 'icon-heart')}
                                                icon={farHeart}
                                            />
                                            <div className={cx('bubbles')}>Add to WishList</div>
                                        </div>
                                    )}
                                    {heart && (
                                        <div
                                            onClick={() => handleRemoveFromWish(productDetail?._id)}
                                            className={cx('icon-div', 'fa-stack')}
                                        >
                                            <FontAwesomeIcon
                                                className={cx('fa-stack-2x', 'icon-circle')}
                                                icon={faCircle}
                                            />

                                            <FontAwesomeIcon
                                                style={{ color: ' #ad2126' }}
                                                onClick={handleHeart}
                                                className={cx('fa-stack-1x', 'icon-heart')}
                                                icon={fasHeart}
                                            />

                                            <div className={cx('bubbles')}>Add to WishList</div>
                                        </div>
                                    )}
                                </>
                            )}
                            {!user && (
                                <>
                                    <div className={cx('icon-div', 'fa-stack')}>
                                        <label style={{ cursor: 'pointer' }} htmlFor="checkbox-require-wish">
                                            <FontAwesomeIcon
                                                className={cx('fa-stack-2x', 'icon-circle')}
                                                icon={faCircle}
                                            />
                                            <FontAwesomeIcon
                                                style={{ color: ' #ad2126' }}
                                                onClick={handleHeart}
                                                className={cx('fa-stack-1x', 'icon-heart')}
                                                icon={farHeart}
                                            />
                                        </label>
                                        <div className={cx('bubbles')}>Add to WishList</div>
                                        <input
                                            className={cx('checkbox-require-wish')}
                                            id="checkbox-require-wish"
                                            type="checkbox"
                                        />
                                        <div className={cx('require-wish')}>
                                            <label htmlFor="checkbox-require-wish">
                                                <FontAwesomeIcon className={cx('require-login-icon')} icon={faXmark} />
                                            </label>
                                            <p>
                                                Please{' '}
                                                <span className={cx('navigate-span')}>
                                                    <Link style={{ color: 'inherit' }} to={'/login'}>
                                                        login
                                                    </Link>
                                                </span>{' '}
                                                to add your favorite
                                            </p>
                                            <p className={cx('or')}>or</p>
                                            <p className={cx('navigate')}>
                                                If you are the New Customer, you can create your account in{' '}
                                                <span className={cx('navigate-span')}>
                                                    <Link style={{ color: 'inherit' }} to={'/register'}>
                                                        here
                                                    </Link>
                                                </span>
                                            </p>
                                        </div>
                                        <label
                                            htmlFor="checkbox-require-wish"
                                            className={cx('overlay-require-wish')}
                                        ></label>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <div className={cx('suggestion')}>
                <h1 className={cx('title')}>You may also like...</h1>
                <div ref={containerRef} className={cx('suggest-container', 'row', 'no-gutters')}>
                    {productSuggest?.map((product, index) => (
                        <Link
                            onClick={() => handleClick(product._id)}
                            to={`/${product._id}`}
                            className={cx('item', 'col', 'l-3')}
                        >
                            <img className={cx('image-feature')} src={product.imageUrl} alt="pic" />
                            <img className={cx('image-second')} src={product.imageUrl2} alt="pic" />
                            <div className={cx('content')}>
                                <h1>{capitalizeString(product.name)}</h1>
                                <h2>{capitalizeString(product.color)}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={cx('suggest-btn-div')}>
                    <button onClick={scrollToPrevProducts} className={cx('suggest-btn')}>
                        Prev
                    </button>
                    <button onClick={scrollToNextProducts} className={cx('suggest-btn')}>
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetail;
