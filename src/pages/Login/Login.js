import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Footer from '../../components/Layouts/Footer/Footer';
import Header from '../../components/Layouts/Header/Header';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { faEye, faEyeSlash, faLock, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import validation from '../Login/validation';
import { loginUser } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Login() {
    const [view, setView] = useState('password');
    const [eye, setEye] = useState(true);
    const handleView = () => {
        setView('text');
        setEye(false);
    };
    const handleUnview = () => {
        setView('password');
        setEye(true);
    };
    // set validation
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const fetching = useSelector((state) => state.auth.login?.isFetching);
    const loginError = useSelector((state) => state.auth.login?.error);

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        username: '',
        password: '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validation(values));
        const user = {
            username: values.username,
            password: values.password,
        };
        if (!errors.username && !errors.password) {
            await loginUser(user, dispatch, navigate);
        }
    };
    return (
        <div className={cx('wrapper', 'grid')}>
            <Header />
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('login-div', 'col', 'l-6', 'l-o-3')}>
                    <h1 className={cx('title')}>Login</h1>
                    <p className={cx('caption')}>View your order history and manage your account preferences.</p>
                    {/* FORM OPEN */}
                    <form onSubmit={handleSubmit} className={cx('input-form')}>
                        <div className={cx('input-div')}>
                            <label htmlFor="username" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUserTie} />
                            </label>
                            <input
                                onChange={handleChange}
                                name="username"
                                id="username"
                                className={cx('input')}
                                placeholder="Username"
                            />
                        </div>
                        {errors.username && <p className={cx('error-msg')}>{errors.username}</p>}
                        <div className={cx('input-div')}>
                            <label htmlFor="password" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </label>
                            <input
                                onChange={handleChange}
                                name="password"
                                id="password"
                                type={`${view}`}
                                className={cx('input')}
                                placeholder="Password"
                            />
                            {eye && <FontAwesomeIcon className={cx('icon-view')} onClick={handleView} icon={faEye} />}
                            {!eye && (
                                <FontAwesomeIcon className={cx('icon-view')} onClick={handleUnview} icon={faEyeSlash} />
                            )}
                        </div>
                        {errors.password && <p className={cx('error-msg')}>{errors.password}</p>}
                        {loginError && !user && (
                            <p className={cx('error-msg')}>Something went wrong, please try again!</p>
                        )}

                        {!fetching && <button className={cx('btn')}>Sign in</button>}
                        {fetching && (
                            <button disabled={true} className={cx('btn', 'loading-btn')}>
                                <span className={cx('loading-btn-content')}>Please wait...</span>
                            </button>
                        )}
                    </form>
                    {/* FORM CLOSE */}
                    <p className={cx('or')}>or</p>
                    <p className={cx('navigate')}>
                        If you are the New Customer, you can create your account in{' '}
                        <span className={cx('navigate-span')}>
                            <Link style={{ color: 'inherit' }} to={'/register'}>
                                here
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
