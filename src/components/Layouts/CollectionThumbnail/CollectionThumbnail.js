import { Link } from 'react-router-dom';
import styles from './CollectionThumbnail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function CollectionThumbnail() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('background-img')}
                alt="background-img"
                src="https://cdn.mos.cms.futurecdn.net/uPTkLTkC2kZiKzWGCs7oG3-1200-80.jpg"
            />
            <div className={cx('content-div')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('content', 'col', 'l-6', 'l-o-1')}>
                            <h1>SUIT UP</h1>
                            <p>Step confidently into Today with a Smart Pair of Base Londons</p>
                            <Link to={'/formal-shoes'}>
                                <button className={cx('btn')}>Shop now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollectionThumbnail;
