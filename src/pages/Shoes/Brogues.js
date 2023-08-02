import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import styles from './Shoes.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Brogues() {
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
    const brogues = products.filter((product) => product.type.includes('Smart'));
    console.log(brogues);
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
                            <span className={cx('shoes')}>Shoes</span>
                        </p>
                        <h1 className={cx('intro-para-title')}>Shoes</h1>
                        <p className={cx('intro-para-content')}>
                            Need shoes for men but not exactly sure what you’re looking for? No problem! Our quality
                            men's shoes include everything from leather slip-ons to luxury lace-ups to casual trainers.
                            These classic styles will be the perfect addition to any man’s wardrobe. See our complete
                            collection of men’s shoes below and discover men's brogues, on-trend shoes, men's trainers,
                            men's casual shoes, men's formal shoes or men's work shoes.
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
                    {brogues.map((product) => (
                        <div className={cx('product-div', 'col', 'l-3')}>
                            <img className={cx('feature-image')} src={product.imgUrl} />
                            <img className={cx('second-image')} src={product.imgUrl2} />
                            <div className={cx('top-detail')}>
                                <p className={cx('product-name')}>{product.name}</p>
                                <p className={cx('product-price')}>{product.price}đ</p>
                            </div>
                            <p className={cx('product-color')}>{product.color}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Brogues;
