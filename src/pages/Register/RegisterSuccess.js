import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import Header from '../../components/Layouts/Header/Header';
import Footer from '../../components/Layouts/Footer/Footer';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function RegisterSuccess() {
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('login-div', 'col', 'l-6', 'l-o-3')}>
                    <h1 className={cx('title', 'title-success')}>Welcome</h1>
                    <p className={cx('caption')}>Your account is created successful. Welcome to us, sir</p>
                    <Link className={cx('link')} to={'/login'}>
                        <button className={cx('btn', 'btn-success')}>Sign in</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RegisterSuccess;
