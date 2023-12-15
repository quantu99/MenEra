import { Link } from 'react-router-dom';
import styles from './Thumpnail.module.scss';
import classNames from 'classnames/bind';
import image from '../../../image/p9.PNG';
const cx = classNames.bind(styles);
function Thumbnail() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('thumbnail-img')} src="https://wallpapercave.com/wp/wp10249993.jpg" />
            <img alt="" className={cx('thumpnail-imgMobile')} src={image} />
            <div className={cx('content')}>
                <h1>CLASSIC-ROMANTIC-TRENDY VIBES</h1>
                <div className={cx('content-detail')}>
                    <span>CLASSIC</span>
                    <span>ROMANTIC</span>
                    <span>TRENDY VIBES</span>
                </div>
            </div>
            <Link to={'/all-shoes'}>
                <button className={cx('btn')}>Shop now</button>
            </Link>
        </div>
    );
}

export default Thumbnail;
