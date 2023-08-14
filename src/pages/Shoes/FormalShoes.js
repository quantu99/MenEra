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
function FormalShoes() {
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
    const formal = allProducts?.filter((product) => product.type.includes('formal'));
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
                            <span className={cx('shoes')}>Formal Shoes</span>
                        </p>
                        <h1 className={cx('intro-para-title')}>Formal Shoes</h1>
                        <p className={cx('intro-para-content')}>
                            If you’re looking for a pair of formal footwear that can be worn for all special occasions,
                            our range of men’s formal shoes will do the trick. They will complete any suave outfit and
                            will entice you to stand out from the crowd. Smart shoes are the key to success, so why not
                            dress to impress? Men's Era offers a wide selection of smart black brogues you may also care
                            to delve into.
                        </p>
                    </div>
                    <div className={cx('intro-image-div', 'l-7', 'l-o-1')}>
                        <img
                            className={cx('intro-image')}
                            src="https://baselondon.com/cdn/shop/collections/Formal-Nav_1024x1024.jpg?v=1673341864"
                        />
                    </div>
                </div>
                <div className={cx('body', 'row', 'no-gutters')}>
                    {formal?.map((product) => (
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

export default FormalShoes;
