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
function WorkShoes() {
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
    const work = allProducts?.filter((product) => product.type.includes('work'));
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
                            <span className={cx('shoes')}>Work Shoes</span>
                        </p>
                        <h1 className={cx('intro-para-title')}>Work Shoes</h1>
                        <p className={cx('intro-para-content')}>
                            Ensure that you’re stylish and comfortable in the office with our collection of men’s work
                            shoes. Crafted from the finest leather, our collection of work shoes are long-lasting and
                            include intricate details such as stitching around the sole. Keep your feet feeling snug
                            from 9 until 5 in these great office shoes for men. When you're done, check out our larger
                            range of men's shoes.
                        </p>
                    </div>
                    <div className={cx('intro-image-div', 'l-7', 'l-o-1')}>
                        <img
                            className={cx('intro-image')}
                            src="https://baselondon.com/cdn/shop/collections/Screenshot_from_2023-01-09_15-15-53_1024x1024.png?v=1673342863"
                        />
                    </div>
                </div>
                <div className={cx('body', 'row', 'no-gutters')}>
                    {work?.map((product) => (
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

export default WorkShoes;
