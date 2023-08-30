import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import logo from '../../../image/logo.png';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('about', 'col', 'l-5')}>
                    <div className={cx('image-div')}>
                        <img src={logo} alt="logo" />
                        <p>Men's Era</p>
                    </div>
                    <div className={cx('about-paragraph')}>
                        <h1>About Us</h1>
                        <p>
                            Established in 2023 to tend to the footwear demands of the British male, Men's Era
                            introduced a somewhat previously unfound, branded footwear option to the high street for the
                            very first time. Before this, guys were faced with only high end designer or own label
                            products. With an overwhelming passion for delivering incredible footwear, Men's Era quickly
                            found themselves emerging as market leaders in their field; something which has been proudly
                            maintained through to the current day. Designing, developing and delivering a versatile,
                            appealing but most of all quality range of men's shoes and boots, Men's Era strives to
                            satisfy even the fussiest footwear tastes. The finest quality leathers combined with an
                            excellence in craftsmanship is always used to build a perfectly formed range of fashion
                            focused formals, versatile semi-formals and comfortable casual styles, season after season.
                            Supplying more than just a pair of shoes, Men's Era also goes about providing a platform
                            upon which the wearer gains confidence, a style and a strong personality that matches the
                            ethos of the brand.
                        </p>
                        <div className={cx('sticky-2')}></div>
                    </div>
                </div>
                <div className={cx('categories', 'col', 'l-5', 'l-o-2')}>
                    <div className={cx('categories-item')}>
                        <div className={cx('products')}>
                            <h1 className={cx('right-title')}>Products</h1>
                            <ul className={cx('list')}>
                                <li className={cx('list-item')}>Men's Shoes</li>
                                <li className={cx('list-item')}>Men's Boots</li>
                                <li className={cx('list-item')}>Men's Trainers</li>
                                <li className={cx('list-item')}>Men's Sandals</li>
                            </ul>
                        </div>
                        <div className={cx('help')}>
                            <h1 className={cx('right-title')}>Help</h1>
                            <ul className={cx('list')}>
                                <li className={cx('list-item')}>Help Centre</li>
                                <li className={cx('list-item')}>Contact Us</li>
                                <li className={cx('list-item')}>Delivery</li>
                                <li className={cx('list-item')}>Return</li>
                                <li className={cx('list-item')}>Track My Order</li>
                                <li className={cx('list-item')}>International Orders</li>
                            </ul>
                        </div>
                        <div className={cx('order')}>
                            <h1 className={cx('right-title')}>Ordering</h1>
                            <ul className={cx('list')}>
                                <li className={cx('list-item')}>Delivery FAQs</li>
                                <li className={cx('list-item')}>Student Discount</li>
                                <li className={cx('list-item')}>Payment & Security</li>
                                <li className={cx('list-item')}>Terms & Conditions</li>
                                <li className={cx('list-item')}>Size Guide</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('input-div')}>
                        <input className={cx('input')} placeholder="Email address" />
                        <button className={cx('btn')}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <p>
                    Copyright © 2023 <span className={cx('span')}>Callmequantu</span> All Rights Reserved.
                </p>
                <img src="https://cdn.shopify.com/s/files/1/0052/8164/4662/files/payment_5331d170-aa8c-4a49-9b5d-ea6411b23c75.png?v=1613544399" />
            </div>
        </div>
    );
}

export default Footer;
