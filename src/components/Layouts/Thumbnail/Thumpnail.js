import styles from './Thumpnail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Thumbnail() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('thumbnail-img')} src="https://wallpapercave.com/wp/wp10249993.jpg" />
            <div className={cx('content')}>
                <h1>CLASSIC-ROMANTIC-TRENDY VIBES</h1>
            </div>
            <button className={cx('btn')}>Shop now</button>
        </div>
    );
}

export default Thumbnail;
