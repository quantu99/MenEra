import { useEffect, useRef, useState } from 'react';
import styles from './Collection.module.scss';
import classNames from 'classnames/bind';
import { getAllProducts, getProductDetail } from '../../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Collection() {
    const dispatch = useDispatch();
    const allProducts = useSelector((state) => state.products.getAllProducts?.allProducts);
    const formal = allProducts?.filter(
        (product) => product.type.includes('formal') || product.type.includes('chelsea'),
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
        const containerWidth = container?.offsetWidth;

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
            <h1 className={cx('title')}>Formal Shoes</h1>
            {allProducts && (
                <>
                    <div ref={containerRef} className={cx('container', 'row', 'no-gutters')}>
                        {formal?.map((product, index) => (
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
                    </div>
                </>
            )}
            {!allProducts && (
                <div className={cx('no-products-div')}>
                    <p className={cx('no-products-para')}>Please wait a moment, sorry for the inconvenience.</p>
                    <FontAwesomeIcon className={cx('no-products-icon')} icon={faGear} />
                </div>
            )}
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

export default Collection;
