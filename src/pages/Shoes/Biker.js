import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import styles from './Shoes.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllProducts, getProductDetail } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Biker() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.getAllProducts?.allProducts);
    useEffect(() => {
        getAllProducts(dispatch);
    }, []);
    const biker = allProducts?.filter((product) => product.type.includes('biker'));
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    const handleClick = (id) => {
        getProductDetail(dispatch, id);
    };
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('grid', 'container')}>
                <div className={cx('intro', 'row', 'no-gutters')}>
                    <div className={cx('intro-para-div', 'col', 'l-3', 'l-o-1')}>
                        <p className={cx('intro-para-navigate')}>
                            <Link style={{ color: 'inherit', textDecoration: 'none' }} to={'/'}>
                                <span className={cx('home')}>Home</span>
                            </Link>{' '}
                            <FontAwesomeIcon className={cx('intro-para-navigate-icon')} icon={faChevronRight} />{' '}
                            <span className={cx('shoes')}>Biker Boots</span>
                        </p>
                        <h1 className={cx('intro-para-title')}>Biker Boots</h1>
                        <p className={cx('intro-para-content')}>
                            Men's biker boots are an iconic style that can easily set you apart from the crowd and is
                            cool and smart enough to dress up a plain old t-shirt and jeans. With classic leather and
                            quirky suede finishes available, there will definitely be a biker boot style out there for
                            you. After you've browsed this range, be sure to check out our impressive collection of
                            men's boots.
                        </p>
                    </div>
                    <div className={cx('intro-image-div', 'l-7', 'l-o-1')}>
                        <img
                            className={cx('intro-image')}
                            src="https://baselondon.com/cdn/shop/collections/Biker-Boots-1_1024x1024.jpg?v=1673353212"
                        />
                    </div>
                </div>
                {allProducts && (
                    <div className={cx('body', 'row', 'no-gutters')}>
                        {biker?.map((product) => (
                            <Link
                                style={{ textDecoration: 'none' }}
                                onClick={() => handleClick(product._id)}
                                to={`/${product._id}`}
                                className={cx('product-div', 'col', 'l-3')}
                            >
                                <img className={cx('feature-image')} src={product.imageUrl} />
                                <img className={cx('second-image')} src={product.imageUrl2} />
                                <div className={cx('top-detail')}>
                                    <p className={cx('product-name')}>{capitalizeString(product.name)}</p>
                                    <p className={cx('product-price')}>{product.price.toLocaleString()}đ</p>
                                </div>
                                <p className={cx('product-color')}>{capitalizeString(product.color)}</p>
                            </Link>
                        ))}
                    </div>
                )}
                {!allProducts && (
                    <div className={cx('no-products-div')}>
                        <p className={cx('no-products-para')}>Please wait a moment, sorry for the inconvenience.</p>
                        <FontAwesomeIcon className={cx('no-products-icon')} icon={faGear} />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Biker;
