import classNames from 'classnames/bind';
import styles from './Popular.module.scss';
const cx = classNames.bind(styles);
function Popular() {
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container-1', 'row', 'no-gutters')}>
                <div className={cx('image-div', 'col', 'l-3', 'l-o-1')}>
                    <img
                        className={cx('img')}
                        src="https://baselondon.com/cdn/shop/products/woburn_20bordo_320x.jpg?v=1680261317"
                        alt="popular-img"
                    />
                </div>
                <div className={cx('des-div', 'col', 'l-4', 'l-o-2')}>
                    <div className={cx('sticky')}>
                        <p>"</p>
                    </div>
                    <p className={cx('des')}>
                        Looking for a shoe that will make an impression? Look no further than the Woburn Brogues from
                        Base London. These hi shine formal leather brogues are sure to turn heads with their chunky
                        rubber studded fashion sole and detailed brogue pattern. Not to mention, they're incredibly
                        comfortable with a cushioned Ortholiteจ inner-sole. So whether you're headed to the office or a
                        night out on the town, the Woburn Brogues are perfect for any occasion.
                    </p>
                </div>
            </div>
            <div className={cx('container-1', 'row', 'no-gutters')}>
                <div className={cx('des-div', 'col', 'l-4', 'l-o-2')}>
                    <div className={cx('sticky')}>
                        <p>"</p>
                    </div>
                    <p className={cx('des')}>
                        When it comes to spring and summer style, there's nothing quite like a great pair of leather
                        Brogues and our Sully shoes are the perfect choice for any smart/casual occasion. Made from rich
                        washed leather, they feature a long-wing brogue pattern that extends all the way to the heel. A
                        cushioned Ortholiteจ inner provides added comfort and the contrasting rand around the sole gives
                        this shoe a stylish lift. So when you're looking for the perfect finishing touch to your spring
                        and summer wardrobe, reach for our Sully shoes. You'll be glad you did.
                    </p>
                </div>
                <div className={cx('image-div', 'col', 'l-3', 'l-o-1')}>
                    <img
                        className={cx('img')}
                        src="https://baselondon.com/cdn/shop/products/Sully_20Washed_20Tan_20Lifestyle_203_320x.jpg?v=1683293719"
                        alt="popular-img"
                    />
                </div>
            </div>
            <div className={cx('container-1', 'row', 'no-gutters')}>
                <div className={cx('image-div', 'col', 'l-3', 'l-o-1')}>
                    <img
                        className={cx('img')}
                        src="https://baselondon.com/cdn/shop/products/Crane-Black-1_320x.jpg?v=1683211567"
                        alt="popular-img"
                    />
                </div>
                <div className={cx('des-div', 'col', 'l-4', 'l-o-2')}>
                    <div className={cx('sticky')}>
                        <p>"</p>
                    </div>
                    <p className={cx('des')}>
                        Crane has been designed for the man who means business. Sleek, sophisticated and stylish, this
                        formal leather Oxford shoe is perfect for making a great impression. With a 5-lace closing,
                        toe-cap stitching and slim line resin sole, it's got all the features you need to look your
                        best. Plus, the Ortholiteจ inner-sole provides cushioned comfort all day long. When you want to
                        make the right impression, reach for 'Crane'.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Popular;
