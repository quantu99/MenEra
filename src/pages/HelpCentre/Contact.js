import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import { useState } from 'react';
import { addNewMessage } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Contact() {
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const userId = user?._id;
    const [values, setValues] = useState({
        message: '',
    });
    const handleChange = (e) => {
        setValues({
            [e.target.name]: e.target.value,
        });
    };
    const handleAddNewMessage = () => {
        const newMessage = values.message;
        addNewMessage(userId, dispatch, newMessage);
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('contact-div', 'l-6', 'l-o-3')}>
                    <h1 className={cx('header')}>Contact us</h1>
                    <div className={cx('input-wrapper')}>
                        <div className={cx('input-div')}>
                            <label className={cx('input-label')}>Email</label>
                            {user && <input disabled value={user?.email} className={cx('input')} placeholder="Email" />}
                            {!user && <input className={cx('input')} placeholder="Email" />}
                        </div>
                        <div className={cx('input-div')}>
                            <label className={cx('input-label')}>Message</label>
                            <textarea
                                name="message"
                                onChange={handleChange}
                                className={cx('input', 'textarea')}
                                placeholder="Write your message"
                            ></textarea>
                        </div>
                        <button onClick={handleAddNewMessage} className={cx('btn')}>
                            Send
                        </button>
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
