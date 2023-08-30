import { Link } from 'react-router-dom';
import styles from './Kind.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Kind() {
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('frame', 'col', 'l-6')}>
                    <img
                        className={cx('image')}
                        src="https://baselondon.com/cdn/shop/files/work-shoes-bannerArtboard-1_1920x804_crop_center_1920x804_crop_center_9d4cc983-9135-4778-ad0c-af38a7ba3f1a_x417_crop_center.jpg?v=1671723921"
                    />
                    <div className={cx('content-div')}>
                        <div className={cx('content')}>
                            <h1>Men's Work Shoes</h1>
                            <p>Leather Formals that Mean Business</p>
                        </div>
                        <Link to={'/work-shoes'}>
                            <button className={cx('btn')}>Shop now</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('frame', 'col', 'l-6')}>
                    <img
                        className={cx('image')}
                        src="https://baselondon.com/cdn/shop/files/brogues-bannerArtboard-1_1920x804_crop_center_e7479ecc-a60c-4b70-8b8f-b5558914bfdc_x417_crop_center.png?v=1668682870"
                    />
                    <div className={cx('content-div')}>
                        <div className={cx('content')}>
                            <h1>Men's Wedding Shoes</h1>
                            <p>Browse Classic and Contemporary Men's Formals</p>
                        </div>
                        <Link to={'/wedding'}>
                            <button className={cx('btn')}>Shop now</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('frame', 'col', 'l-6')}>
                    <img
                        className={cx('image')}
                        src="https://baselondon.com/cdn/shop/files/Seymour-bannerArtboard-1_1920x804_crop_center_cebe1d60-ffc0-4119-a159-c405588f0e97_x417_crop_center.png?v=1668682895"
                    />
                    <div className={cx('content-div')}>
                        <div className={cx('content')}>
                            <h1>Men's Boots</h1>
                            <p>Explore The Latest Men's Boot Styles</p>
                        </div>
                        <Link to={'/all-boots'}>
                            <button className={cx('btn')}>Shop now</button>
                        </Link>
                    </div>
                </div>
                <div className={cx('frame', 'col', 'l-6')}>
                    <img
                        className={cx('image')}
                        src="https://baselondon.com/cdn/shop/files/Loafers-bannerArtboard-1_1920x804_crop_center_2x_6499dcd5-37f2-4429-a8a5-3e664191b205_x417_crop_center.jpg?v=1671103771"
                    />
                    <div className={cx('content-div')}>
                        <div className={cx('content')}>
                            <h1>Men's Loafers</h1>
                            <p>Slip into Something a Little More Stylish</p>
                        </div>
                        <Link to={'/loafers'}>
                            <button className={cx('btn')}>Shop now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kind;
