import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faA,
    faCheck,
    faEye,
    faEyeSlash,
    faLocationDot,
    faLock,
    faPaperPlane,
    faUserTie,
    faZ,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../../components/Layouts/Footer/Footer';
import Header from '../../components/Layouts/Header/Header';
import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import validation from './validation';
import { getAllUsers, registerUser } from '../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
const cx = classNames.bind(styles);
function Register() {
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
    // Set validate
    const dispatch = useDispatch();
    const fetching = useSelector((state) => state.auth.register?.isFetching);
    const success = useSelector((state) => state.auth.register?.success);
    // State error username : checked if the new username is same to the username already have in DB
    const [errors, setErrors] = useState({});
    const [allErrors, setAllErrors] = useState(false);
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        address: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    useEffect(() => {
        if (
            values.firstname !== '' &&
            values.lastname !== '' &&
            values.address !== '' &&
            values.username !== '' &&
            values.email !== '' &&
            values.password !== '' &&
            values.confirmPassword !== '' &&
            values.password.length >= 6 &&
            values.confirmPassword === values.password
        ) {
            setAllErrors(true);
        }
    }, [values]);
    // get all users
    useEffect(() => {
        getAllUsers(dispatch);
        // eslint-disable-next-line
    }, []);
    // Get allUsers array
    // get the username object in allUsers array
    // The function that used to check the new username was signed up to be same the username already have in DB ?
    const [usernameError, setUsernameError] = useState(false);

    const allUsers = useSelector((state) => state.user.getAllUsers?.allUsers);
    const allUsersUsername = allUsers?.map((user) => user.username);
    const checkUsername = (username) => {
        if (allUsersUsername.includes(username)) {
            return setUsernameError(true);
        }
    };
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        setUsernameError(false);
        setErrors({});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            firstname: values.firstname,
            lastname: values.lastname,
            address: values.address,
            username: values.username,
            email: values.email,
            password: values.password,
        };
        setErrors(validation(values));
        checkUsername(newUser.username);
        if (allErrors) {
            await registerUser(newUser, dispatch);
        }
    };
    return (
        <>
            {!success && (
                <div className={cx('wrapper', 'grid')}>
                    <Header />
                    <div className={cx('container', 'row', 'no-gutters')}>
                        <div className={cx('login-div', 'col', 'l-6', 'l-o-3')}>
                            <h1 className={cx('title')}>Register</h1>
                            <p className={cx('caption')}>You can create an account when you checkout and pay.</p>
                            {/* FORM OPEN */}
                            <form onSubmit={handleSubmit} className={cx('input-form')}>
                                <div className={cx('input-div')}>
                                    <label htmlFor="firstname" className={cx('input-label')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faA} />
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="firstname"
                                        id="firstname"
                                        className={cx('input')}
                                        placeholder="First name"
                                    />
                                </div>
                                {errors.firstname && <p className={cx('error-msg')}>{errors.firstname}</p>}
                                <div className={cx('input-div')}>
                                    <label htmlFor="lastname" className={cx('input-label')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faZ} />
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="lastname"
                                        id="lastname"
                                        className={cx('input')}
                                        placeholder="Last name"
                                    />
                                </div>
                                {errors.lastname && <p className={cx('error-msg')}>{errors.lastname}</p>}
                                <div className={cx('input-div')}>
                                    <label htmlFor="address" className={cx('input-label')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="address"
                                        id="address"
                                        className={cx('input')}
                                        placeholder="Address"
                                    />
                                </div>
                                {errors.address && <p className={cx('error-msg')}>{errors.address}</p>}
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
                                {usernameError && (
                                    <p className={cx('error-msg')}>This username is already use, please try again.</p>
                                )}
                                {errors.username && <p className={cx('error-msg')}>{errors.username}</p>}
                                <div className={cx('input-div')}>
                                    <label htmlFor="email" className={cx('input-label')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane} />
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="email"
                                        id="email"
                                        className={cx('input')}
                                        placeholder="Email address"
                                    />
                                </div>
                                {errors.email && <p className={cx('error-msg')}>{errors.email}</p>}
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
                                    {eye && (
                                        <FontAwesomeIcon
                                            className={cx('icon-view')}
                                            onClick={handleView}
                                            icon={faEye}
                                        />
                                    )}
                                    {!eye && (
                                        <FontAwesomeIcon
                                            className={cx('icon-view')}
                                            onClick={handleUnview}
                                            icon={faEyeSlash}
                                        />
                                    )}
                                </div>
                                {errors.password && <p className={cx('error-msg')}>{errors.password}</p>}
                                <div className={cx('input-div')}>
                                    <label htmlFor="confirmPassword" className={cx('input-label')}>
                                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                                    </label>
                                    <input
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        type={`${view}`}
                                        className={cx('input')}
                                        placeholder="Confirm password"
                                    />
                                    {eye && (
                                        <FontAwesomeIcon
                                            className={cx('icon-view')}
                                            onClick={handleView}
                                            icon={faEye}
                                        />
                                    )}
                                    {!eye && (
                                        <FontAwesomeIcon
                                            className={cx('icon-view')}
                                            onClick={handleUnview}
                                            icon={faEyeSlash}
                                        />
                                    )}
                                </div>
                                {errors.confirmPassword && <p className={cx('error-msg')}>{errors.confirmPassword}</p>}
                                {!fetching && <button className={cx('btn')}>Sign up</button>}
                                {fetching && (
                                    <button disabled={true} className={cx('btn', 'loading-btn')}>
                                        <span className={cx('loading-btn-content')}>Please wait...</span>
                                    </button>
                                )}
                            </form>
                            {/* FORM CLOSE */}
                            <p className={cx('or')}>or</p>
                            <p className={cx('navigate')}>
                                If this isn’t your first time on our site, you may already have an account with us.
                                Login{' '}
                                <span className={cx('navigate-span')}>
                                    <Link style={{ color: 'inherit' }} to={'/login'}>
                                        here
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            )}
            {success && (
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
            )}
        </>
    );
}

export default Register;
