import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { createAxios } from '../../createInstance';
import {
    faSuitcase,
    faUserTie,
    faA,
    faZ,
    faLocationDot,
    faPaperPlane,
    faLock,
    faPenNib,
    faXmark,
    faEye,
    faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import validation from './validations';
import { editSuccess, logoutSuccess } from '../../redux/authSlice';
import { editUsers, logoutUsers } from '../../redux/apiRequest';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
const cx = classNames.bind(styles);
function Account() {
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
    const btnRef = useRef(null);
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userId = user?._id;
    const userFisrtname = user?.firstname;
    const userLastname = user?.lastname;
    const firstLetterFirstname = userFisrtname?.substring(0, 1);
    const firstLetterLastname = userLastname?.substring(0, 1);
    const stateSuccess = useSelector((state) => state.auth.edit?.success);
    const stateFetching = useSelector((state) => state.auth.edit?.isFetching);
    console.log(stateSuccess);
    // set validation
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, editSuccess);
    let axiosJWT2 = createAxios(user, dispatch, logoutSuccess);
    const [errors, setErrors] = useState({});
    const [allErrors, setAllErrors] = useState(false);
    const [values, setValues] = useState({
        password: '',
        confirmPassword: '',
    });
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    useEffect(() => {
        const isValid =
            values.password !== '' &&
            !values.password.indexOf(' ') !== -1 &&
            !values.password.includes("'") &&
            values.confirmPassword !== '' &&
            values.password.length >= 6 &&
            values.confirmPassword === values.password;
        setAllErrors(isValid);
    }, [values]);
    const handleKeyDown = async function (e) {
        try {
            switch (e.which) {
                case 13:
                    setErrors(validation(values));
                    const newPassword = values.password;
                    if (allErrors) {
                        await editUsers(user?.accessToken, userId, newPassword, dispatch, axiosJWT);
                    }
                    if (stateSuccess && allErrors) {
                        await logoutUsers(user?.accessToken, userId, dispatch, navigate, axiosJWT2);
                    }
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error(error);
        }
    };
    btnRef.current?.addEventListener('keydown', handleKeyDown);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validation(values));
        const newPassword = values.password;
        if (allErrors) {
            await editUsers(user?.accessToken, userId, newPassword, dispatch, axiosJWT);
        }
        if (stateSuccess && allErrors) {
            await logoutUsers(user?.accessToken, userId, dispatch, navigate, axiosJWT2);
        }
    };
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user]);
    return (
        <div className={cx('wrapper', 'grid')}>
            <div className={cx('container', 'row', 'no-gutters')}>
                <div className={cx('sidebar', 'col', 'l-4')}>
                    <div className={cx('header')}>
                        <div className={cx('avatar')}>
                            {firstLetterFirstname}
                            {firstLetterLastname}
                        </div>
                        <div className={cx('header-content')}>
                            {' '}
                            <p className={cx('header-title')}>
                                Hello, {user?.firstname} {user?.lastname}
                            </p>
                            <p className={cx('header-para')}>{user?.email}</p>
                        </div>
                    </div>
                    <p className={cx('title')}>Settings</p>
                    <div className={cx('settings-menu')}>
                        <ul className={cx('setting-menu-list')}>
                            <li className={cx('setting-menu-list-item')}>
                                <FontAwesomeIcon className={cx('setting-icon')} icon={faUserTie} />
                                <p className={cx('setting-para')}>Account Details</p>
                            </li>
                            <li className={cx('setting-menu-list-item')}>
                                <FontAwesomeIcon className={cx('setting-icon')} icon={faGratipay} />
                                <p className={cx('setting-para')}>My favorite</p>
                            </li>{' '}
                            <li className={cx('setting-menu-list-item')}>
                                <FontAwesomeIcon className={cx('setting-icon')} icon={faSuitcase} />
                                <p className={cx('setting-para')}>My order</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cx('content', 'col', 'l-4', 'l-o-1')}>
                    <h1 className={cx('content-title')}>Account Details</h1>
                    <form onSubmit={handleSubmit} className={cx('account-form')}>
                        <div className={cx('input-div')}>
                            <label htmlFor="firstname" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faA} />
                            </label>
                            <input value={userFisrtname} disabled id="firstname" className={cx('input')} />
                        </div>
                        <div className={cx('input-div')}>
                            <label htmlFor="lastname" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faZ} />
                            </label>
                            <input disabled value={userLastname} id="lastname" className={cx('input')} />
                        </div>
                        <div className={cx('input-div')}>
                            <label htmlFor="address" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLocationDot} />
                            </label>
                            <input disabled value={user?.address} id="address" className={cx('input')} />
                        </div>
                        <div className={cx('input-div')}>
                            <label htmlFor="username" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUserTie} />
                            </label>
                            <input disabled value={user?.username} id="username" className={cx('input')} />
                        </div>

                        <div className={cx('input-div')}>
                            <label htmlFor="email" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faPaperPlane} />
                            </label>
                            <input disabled value={user?.email} id="email" className={cx('input')} />
                        </div>
                        <div className={cx('input-div', 'password-div')}>
                            <label htmlFor="password" className={cx('input-label')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </label>
                            <input
                                disabled
                                value="sdsdsawewqdasasdasdefdsdasda@232312sds!!!!!!sdas2323223das@#@@#@#dasdasdasdsadasdasd51651321"
                                type="password"
                                id="password"
                                className={cx('input')}
                            />
                            <div className={cx('icon-div')}>
                                <label htmlFor="checkbox">
                                    <FontAwesomeIcon className={cx('edit-icon')} icon={faPenNib} />
                                </label>
                                <label htmlFor="checkbox" className={cx('edit')}>
                                    Edit
                                </label>
                                <input
                                    style={{ display: 'none' }}
                                    className={cx('checkbox')}
                                    id="checkbox"
                                    type="checkbox"
                                />
                                <div className={cx('edit-div')}>
                                    <h1 className={cx('edit-title')}>Change password</h1>

                                    <div className={cx('edit-input-div')}>
                                        <label className={cx('edit-input-label')}>New Password</label>
                                        <div className={cx('input-and-icon')}>
                                            <input
                                                onChange={handleChange}
                                                name="password"
                                                type={view}
                                                className={cx('edit-input')}
                                            />
                                            {eye && (
                                                <FontAwesomeIcon
                                                    className={cx('eye')}
                                                    onClick={handleView}
                                                    icon={faEye}
                                                />
                                            )}
                                            {!eye && (
                                                <FontAwesomeIcon
                                                    className={cx('eye')}
                                                    onClick={handleUnview}
                                                    icon={faEyeSlash}
                                                />
                                            )}
                                        </div>
                                        {errors.password && <p className={cx('error-msg')}>{errors.password}</p>}
                                    </div>
                                    <div className={cx('edit-input-div')}>
                                        <label style={{ marginTop: '20px' }} className={cx('edit-input-label')}>
                                            Confirm new password
                                        </label>
                                        <div className={cx('input-and-icon')}>
                                            <input
                                                onChange={handleChange}
                                                name="confirmPassword"
                                                type={view}
                                                className={cx('edit-input')}
                                            />
                                            {eye && (
                                                <FontAwesomeIcon
                                                    className={cx('eye')}
                                                    onClick={handleView}
                                                    icon={faEye}
                                                />
                                            )}
                                            {!eye && (
                                                <FontAwesomeIcon
                                                    className={cx('eye')}
                                                    onClick={handleUnview}
                                                    icon={faEyeSlash}
                                                />
                                            )}
                                        </div>
                                        {stateSuccess && (
                                            <p
                                                style={{ color: 'var(--tan-color)', marginTop: '10px' }}
                                                className={cx('error-msg')}
                                            >
                                                Change password successful!
                                            </p>
                                        )}
                                        {errors.confirmPassword && (
                                            <p className={cx('error-msg')}>{errors.confirmPassword}</p>
                                        )}
                                    </div>
                                    {!stateFetching && (
                                        <button ref={btnRef} onClick={handleSubmit} className={cx('btn')}>
                                            Save
                                        </button>
                                    )}
                                    {stateFetching && (
                                        <button disabled={true} className={cx('btn', 'loading-btn')}>
                                            <span className={cx('loading-btn-content')}>Please wait...</span>
                                        </button>
                                    )}

                                    <label htmlFor="checkbox">
                                        <FontAwesomeIcon className={cx('x')} icon={faXmark} />
                                    </label>
                                </div>
                                <label htmlFor="checkbox" className={cx('overlay')}></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Account;
