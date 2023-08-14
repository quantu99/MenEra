import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import styles from './Shoes.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllProducts } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function CasualShoes() {
    const products = [
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue', 'Smart'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue', 'Smart'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
        {
            name: 'Gibbs Washed Brogue Shoes',
            price: '2.493.000',
            color: 'Tan',
            type: ['Brogue'],
            imgUrl: 'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_201_quzfa3_320x.jpg?v=1690553455',
            imgUrl2:
                'https://baselondon.com/cdn/shop/products/GIBBS_20WASHED_20TAN_20XD02248_206_rqqctx_320x.jpg?v=1690553455',
        },
    ];
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.getAllProducts?.allProducts);
    useEffect(() => {
        getAllProducts(dispatch);
    }, []);
    const casual = allProducts?.filter((product) => product.type.includes('casual'));
    // Uppercase first letter of word
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
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
                            <span className={cx('shoes')}>Casual Shoes</span>
                        </p>
                        <h1 className={cx('intro-para-title')}>Casual Shoes</h1>
                        <p className={cx('intro-para-content')}>
                            Looking for hip casual men's shoes? Men's Era has a huge selection of men's casual shoes
                            that are stylish yet trendy, structured yet tailored and will be your wing-man wherever you
                            go. Simply look below to explore our casual collection that features bold, bright designs as
                            well as subtle, hipster styles. There really is something for everyone in this variety of
                            men's shoes. If you love these, check out the rest of Men's Era's men's shoes, for more
                            super cool styles.
                        </p>
                    </div>
                    <div className={cx('intro-image-div', 'l-7', 'l-o-1')}>
                        <img
                            className={cx('intro-image')}
                            src="https://baselondon.com/cdn/shop/collections/casual-Banner_1024x1024.jpg?v=1673342187"
                        />
                    </div>
                </div>
                <div className={cx('body', 'row', 'no-gutters')}>
                    {casual?.map((product) => (
                        <Link
                            style={{ textDecoration: 'none' }}
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
            </div>
            <Footer />
        </div>
    );
}

export default CasualShoes;
