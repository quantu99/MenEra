import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('contact-div', 'l-6', 'l-o-3')}>
                    <h1 className={cx('header')}>Contact us</h1>
                    <div className={cx('input-wrapper')}>
                        <div className={cx('input-div')}>
                            <label className={cx('input-label')}>Email</label>
                            <input className={cx('input')} placeholder="Email" />
                        </div>
                        <div className={cx('input-div')}>
                            <label className={cx('input-label')}>Message</label>
                            <textarea className={cx('input', 'textarea')} placeholder="Write your message"></textarea>
                        </div>
                        <button className={cx('btn')}>Send</button>
                    </div>
                    <p className={cx('contact-para')}>
                        This site is protected by reCAPTCHA Enterprise and the{' '}
                        <a
                            style={{ color: 'var(--red-color)', fontWeight: '500' }}
                            target="_blank"
                            href="https://policies.google.com/privacy"
                        >
                            Google Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a
                            style={{ color: 'var(--red-color)', fontWeight: '500' }}
                            target="_blank"
                            href="https://policies.google.com/terms"
                        >
                            Terms of Service apply
                        </a>
                        .
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
