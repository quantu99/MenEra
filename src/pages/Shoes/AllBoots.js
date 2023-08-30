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
function AllBoots() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.getAllProducts?.allProducts);
    useEffect(() => {
        getAllProducts(dispatch);
    }, []);
    const allBoots = allProducts?.filter((product) => product.type.includes('boots'));
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
                            <span className={cx('shoes')}>Boots</span>
                        </p>
                        <h1 className={cx('intro-para-title')}>Boots</h1>
                        <p className={cx('intro-para-content')}>
                            Our men's boots can give your outfit the kick that it needs to transform you from just an
                            average Joe, to a dapper gent. Our collection of boots are perfect for those autumnal
                            Instagrams and wintery Pinterest boards. There are all kinds of men's boots on offer from
                            suede slip-ons to luxury lace-ups. Browse the range below for some inspiration.
                        </p>
                    </div>
                    <div className={cx('intro-image-div', 'l-7', 'l-o-1')}>
                        <img
                            className={cx('intro-image')}
                            src="https://baselondon.com/cdn/shop/collections/Screenshot_from_2022-12-06_17-25-02_1024x1024.png?v=1673354613"
                        />
                    </div>
                </div>
                {allProducts && (
                    <div className={cx('body', 'row', 'no-gutters')}>
                        {allBoots?.map((product) => (
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

export default AllBoots;
