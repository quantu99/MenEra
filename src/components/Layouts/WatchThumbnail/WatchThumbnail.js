import styles from './WatchThumbnail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function WatchThumbnail() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('background-img')}
                alt="background-img"
                src="https://dlmag.com/wp-content/uploads/2021/08/Fashion-brands-for-men-in-2021-Ralph-Lauren.jpg"
            />
            <div className={cx('content-div')}>
                <div className={cx('grid')}>
                    <div className={cx('row')}>
                        <div className={cx('content', 'col', 'l-6', 'l-o-2')}>
                            <h1>BE UNIQUE</h1>
                            <p>Show boldy personality via noble & elegant styles</p>
                            <button className={cx('btn')}>Shop now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchThumbnail;
