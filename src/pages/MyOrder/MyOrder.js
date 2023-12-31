import { useEffect } from 'react';
import styles from './MyOrder.module.scss';
import classNames from 'classnames/bind';
import { getMyOrder, getOrder, getOrderDetail } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheck, faGear, faHouseCircleCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function MyOrder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = user?._id;
    const myOrder = useSelector((state) => state.auth.getMyOrder?.myOrder);
    useEffect(() => {
        getMyOrder(id, dispatch);
    }, []);
    const calculateTotal = (products) => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        });
        return total;
    };
    const handleGetDetail = (id) => {
        getOrderDetail(id, dispatch, navigate);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('order-header')}>
                <h1 className={cx('order-header-order')}>Order</h1>
                <p className={cx('order-header-para')}>/</p>
                <Link to={'/my-order-history'} className={cx('order-header-history')}>
                    Order history
                </Link>
            </div>
            <div className={cx('order-div')}>
                {myOrder && (
                    <>
                        {myOrder.length >= 1 && (
                            <>
                                {myOrder?.map((order, index) => (
                                    <div
                                        onClick={() => handleGetDetail(order?._id)}
                                        key={index}
                                        className={cx('container', 'row', 'no-gutters')}
                                    >
                                        <div className={cx('id-div')}>
                                            <p className={cx('title')}>Order Id</p>
                                            <p className={cx('order-code')}> #{order?._id}</p>
                                        </div>
                                        <div className={cx('date-div')}>
                                            <p className={cx('title')}>At</p>
                                            <p className={cx('order-date')}>
                                                {order.orderDate.replace('T', ', ').slice(0, 20)}
                                            </p>
                                            <p className={cx('date-para')}>
                                                This order is created at{' '}
                                                {order.orderDate.replace('T', ', ').slice(0, 20)}
                                                <div className={cx('something')}></div>
                                            </p>
                                        </div>
                                        <div className={cx('total-div')}>
                                            <p className={cx('title')}>Total</p>
                                            <p className={cx('order-total')}>
                                                {calculateTotal(order.products).toLocaleString()}
                                                <span style={{ textDecoration: 'underline' }}>đ</span>
                                            </p>
                                        </div>
                                        <div className={cx('progress-div')}>
                                            <p className={cx('title')}>Order status</p>
                                            {!order.orderProgress && (
                                                <>
                                                    <FontAwesomeIcon className={cx('process-icon')} icon={faGear} />
                                                    <p className={cx('process-para')}>Processing...</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order processed' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faCheck}
                                                    />
                                                    <p className={cx('process-para')}>Processed</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order shipped' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faBox}
                                                    />
                                                    <p className={cx('process-para')}>Order shipped</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order is shipping' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faTruckFast}
                                                    />
                                                    <p className={cx('process-para')}>Order is shipping</p>
                                                </>
                                            )}
                                            {order.orderProgress && order.orderProcess === 'order arrived' && (
                                                <>
                                                    <FontAwesomeIcon
                                                        className={cx('process-icon', 'icon')}
                                                        icon={faHouseCircleCheck}
                                                    />
                                                    <p className={cx('process-para')}>Order arrived</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        {myOrder.length === 0 && (
                            <div className={cx('no-order')}>
                                <p>Order list is empty now</p>
                            </div>
                        )}
                    </>
                )}
                {!myOrder && (
                    <p className={cx('loading-api-para')}>
                        Please wait for moment. Sorry for the inconvenience.
                        <FontAwesomeIcon className={cx('loading-api-icon')} icon={faGear} />
                    </p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default MyOrder;
