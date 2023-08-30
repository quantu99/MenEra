import { useEffect, useRef, useState } from 'react';
import styles from './Trending.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductDetail } from '../../../redux/apiRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faGears } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Trending() {
    const products = [
        {
            imageUrl2nd: 'https://baselondon.com/cdn/shop/products/image_2_sikes_washed_tan_2_2_320x.jpg?v=1679151662',
            imageUrl: 'https://baselondon.com/cdn/shop/products/image_1_sikes_washed_tan_1_2_320x.jpg?v=1679151662',
            name: 'Sikes Washed Chelsea Boots',
            brand: 'Bordo',
            color: 'Tan',
        },
        {
            imageUrl:
                'https://baselondon.com/cdn/shop/products/image_1_woburn_hi_shine_black_2022_pi06012_1_320x.jpg?v=1680784343',
            imageUrl2nd:
                'https://baselondon.com/cdn/shop/products/Woburn_20Black_20BASE-FOOTBALL-STILLS-140_320x.jpg?v=1680784343',

            name: 'Woburn Hi Shrine Brogue Shoes',
            brand: 'Bordo',
            color: 'Black',
        },
        {
            imageUrl:
                'https://baselondon.com/cdn/shop/products/DARCY_20BURNISHED_20TAN_20WV03241_201_320x.jpg?v=1683293690',
            imageUrl2nd:
                'https://baselondon.com/cdn/shop/products/Darcy_20Burnished_20Tan_20Lifestyle_202_320x.jpg?v=1683293690',
            name: 'Darcy Burnished Brogue',
            color: 'Tan',
        },
        {
            imageUrl:
                'https://baselondon.com/cdn/shop/products/CRANE_20BURNISHED_20GREY_20WV02701_201_320x.jpg?v=1679149966',
            imageUrl2nd:
                'https://baselondon.com/cdn/shop/products/CRANE_20BURNISHED_20GREY_20WV02701_206_320x.jpg?v=1679149966',
            name: 'Crane Burnished Oxford Shoes',
            color: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue5',
            brand: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue6',
            brand: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue7',
            brand: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue8',
            brand: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue9',
            brand: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue10',
            brand: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue11',
            brand: 'Bordo',
        },
        {
            imageUrl: 'https://baselondon.com/cdn/shop/products/Darcy_20Bordo_204_320x.jpg?v=1680261268',
            name: 'Darcy Burnished Brogue12',
            brand: 'Bordo',
        },
    ];
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.getAllProducts?.allProducts);
    const trending = allProducts?.filter(
        (product) =>
            product.type.includes('suede') || product.type.includes('chelsea') || product.type.includes('brogues'),
    );
    useEffect(() => {
        getAllProducts(dispatch);
    }, []);
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
    function capitalizeString(str) {
        return str.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
        });
    }
    const handleClick = (id) => {
        getProductDetail(dispatch, id);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <h1 className={cx('title')}>Trending now</h1>
            <div ref={containerRef} className={cx('container', 'row', 'no-gutters')}>
                {allProducts && (
                    <>
                        {trending?.map((product, index) => (
                            <Link
                                style={{ textDecoration: 'none' }}
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
                    </>
                )}
                {!allProducts && (
                    <div className={cx('no-products-div')}>
                        <p className={cx('no-products-para')}>Please wait a moment, sorry for the inconvenience.</p>
                        <FontAwesomeIcon className={cx('no-products-icon')} icon={faGear} />
                    </div>
                )}
            </div>
            <div className={cx('btn-div')}>
                <button onClick={scrollToPrevProducts} className={cx('btn')}>
                    Prev
                </button>
                <button onClick={scrollToNextProducts} className={cx('btn')}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Trending;
