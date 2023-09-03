import { useEffect } from 'react';
import styles from './MyOrderHistory.module.scss';
import classNames from 'classnames/bind';
import { getMyOrderHistory, getOrderHistoryDetail } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCheck, faGear, faHouseCircleCheck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);
function MyOrderHistory() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const id = user?._id;
    const myOrderHistory = useSelector((state) => state.auth.getMyOrderHistory?.myOrderHistory);
    const orderProgress = myOrderHistory?.orderProgress;
    useEffect(() => {
        getMyOrderHistory(id, dispatch);
    }, []);
    const calculateTotal = (products) => {
        let total = 0;
        products.forEach((product) => {
            total += product.price;
        });
        return total;
    };
    const handleGetDetail = (id) => {
        getOrderHistoryDetail(id, dispatch, navigate);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('order-header')}>
                <Link to={'/my-order'} className={cx('order-header-order')}>
                    Order
                </Link>
                <p className={cx('order-header-para')}>/</p>
                <h1 className={cx('order-header-history')}>Order history</h1>
            </div>
            <div className={cx('order-div')}>
                {myOrderHistory && (
                    <>
                        {myOrderHistory?.map((order, index) => (
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
                                        This order is created at {order.orderDate.replace('T', ', ').slice(0, 20)}
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
                                            <FontAwesomeIcon className={cx('process-icon', 'icon')} icon={faCheck} />
                                            <p className={cx('process-para')}>Processed</p>
                                        </>
                                    )}
                                    {order.orderProgress && order.orderProcess === 'order shipped' && (
                                        <>
                                            <FontAwesomeIcon className={cx('process-icon', 'icon')} icon={faBox} />
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
                {!myOrderHistory && (
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
export default MyOrderHistory;
