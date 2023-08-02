import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { faMagnifyingGlassDollar, faSuitcase, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faGratipay } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUsers } from '../../../redux/apiRequest';
import { createAxios } from '../../../createInstance';
import { logoutSuccess } from '../../../redux/authSlice';
const cx = classNames.bind(styles);
function Header() {
    const [position, setPosition] = useState('-200%');
    const [position1, setPosition1] = useState('-200%');
    const [position2, setPosition2] = useState('-200%');
    const handleHover = () => {
        setPosition('0');
    };
    const noHover = () => {
        setPosition('-200%');
    };
    const handleHover1 = () => {
        setPosition1('0');
    };
    const noHover1 = () => {
        setPosition1('-200%');
    };
    const handleHover2 = () => {
        setPosition2('0');
    };
    const noHover2 = () => {
        setPosition2('-1000%');
    };
    //
    const [userExist, setUserExist] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.login?.currentUser);
    const userId = user?._id;
    const userAccessToken = user?.accessToken;
    let axiosJWT = createAxios(user, dispatch, logoutSuccess);
    const handleClick = () => {
        logoutUsers(userAccessToken, userId, dispatch, navigate, axiosJWT);
    };
    useEffect(() => {
        if (user) {
            setUserExist(true);
        } else if (user === null) {
            setUserExist(false);
        }
    }, [userExist]);
    return (
        <div>
            <div className={cx('wrapper', 'grid')}>
                <div className={cx('row', 'no-gutters', 'container')}>
                    <div className={cx('logo', 'col', 'l-3')}>
                        <h1>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}>
                                Men's Era
                            </Link>
                        </h1>
                    </div>
                    <div className={cx('navigation', 'col', 'l-5')}>
                        <ul className={cx('nav-list')}>
                            <li onMouseOut={noHover} onMouseOver={handleHover} className={cx('nav-list-item', 'shoes')}>
                                Shoes
                            </li>
                            <li
                                onMouseOut={noHover1}
                                onMouseOver={handleHover1}
                                className={cx('nav-list-item', 'boost')}
                            >
                                Boost
                            </li>
                            <li
                                onMouseOut={noHover2}
                                onMouseOver={handleHover2}
                                className={cx('nav-list-item', 'collection')}
                            >
                                Collection
                                {/* <div className={cx('collection-menu')}>This is menu</div> */}
                            </li>
                        </ul>
                    </div>
                    <div className={cx('auth', 'col', 'l-4')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlassDollar} />
                        <label htmlFor="checkbox">
                            <FontAwesomeIcon className={cx('icon')} icon={faUserTie} />
                        </label>
                        <FontAwesomeIcon className={cx('icon')} icon={faGratipay} />
                        <FontAwesomeIcon className={cx('icon')} icon={faSuitcase} />
                        <input type="checkbox" id="checkbox" className={cx('checkbox')} />
                        <div className={cx('question')}>
                            {!userExist && (
                                <>
                                    {' '}
                                    <p className={cx('question-para')}>
                                        Login or create an account to view your order history and manage your account
                                        preferences.
                                    </p>
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/login'}>
                                        <button className={cx('btn')}>Login</button>
                                    </Link>
                                    <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/register'}>
                                        <button className={cx('btn', 'register-btn')}>Register</button>
                                    </Link>
                                </>
                            )}
                            {userExist && (
                                <div className={cx('question-exist-div')}>
                                    <p className={cx('question-exist-para')}>
                                        Welcome, {user?.firstname + ' ' + user?.lastname}
                                    </p>
                                    <ul className={cx('question-list')}>
                                        <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/my-account'}>
                                            <li className={cx('question-list-item')}>My Account</li>
                                        </Link>
                                    </ul>
                                    <button onClick={handleClick} className={cx('btn')}>
                                        Log out
                                    </button>
                                </div>
                            )}
                        </div>
                        <label htmlFor="checkbox" className={cx('overlay')}></label>
                    </div>
                </div>
            </div>
            {/* Popper notify */}
            {/* Shoes */}
            <div
                className={cx('shoes-menu', 'grid')}
                style={{ transform: ` translateY(${position})` }}
                onMouseOut={noHover}
                onMouseOver={handleHover}
            >
                <div className={cx('row', 'menu-container', 'no-gutters')}>
                    <div className={cx('menu-left-item', 'col', 'l-2', 'l-o-1')}>
                        <ul className={cx('menu-list')}>
                            <li className={cx('menu-list-item')}>All Shoes </li>
                            <li className={cx('menu-list-item')}>Brogues</li>
                            <li className={cx('menu-list-item')}>Casual Shoes</li>
                            <li className={cx('menu-list-item')}>Sandals</li>
                        </ul>
                    </div>
                    <div className={cx('menu-center-item', 'col', 'l-2')}>
                        <ul className={cx('menu-list')}>
                            <li className={cx('menu-list-item')}>Formal Shoes</li>
                            <li className={cx('menu-list-item')}>Work Shoes</li>
                            <li className={cx('menu-list-item')}>Trainers</li>
                            <li className={cx('menu-list-item')}>Sandals</li>
                        </ul>
                    </div>
                    <div className={cx('menu-right-item', 'col', 'l-6', 'l-o-1')}>
                        <div className={cx('menu-image-1')}>
                            <img
                                className={cx('image-1')}
                                alt="menu-img"
                                src="https://baselondon.com/cdn/shop/files/All-Shoes-Navy-1_686x324_crop_center.jpg?v=1673362439"
                            />
                            <h1 className={cx('image-des')}>All Shoes</h1>
                        </div>
                        <div className={cx('menu-image-2')}>
                            <img
                                alt="menu-img"
                                src="https://baselondon.com/cdn/shop/files/Work-Shoes-2_686x324_crop_center.jpg?v=1673362208"
                            />
                            <h1 className={cx('image-des')}>Work Shoes</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Boost */}
            <div
                style={{ transform: ` translateY(${position1})` }}
                onMouseOut={noHover1}
                onMouseOver={handleHover1}
                className={cx('boost-menu')}
            >
                <div className={cx('row', 'menu-container', 'no-gutters')}>
                    <div className={cx('menu-left-item', 'col', 'l-2', 'l-o-1')}>
                        <ul className={cx('menu-list')}>
                            <li className={cx('menu-list-item')}>All Boots </li>
                            <li className={cx('menu-list-item')}>Chukka Boots</li>
                            <li className={cx('menu-list-item')}>Chelsea Boots</li>
                        </ul>
                    </div>
                    <div className={cx('menu-center-item', 'col', 'l-2')}>
                        <ul className={cx('menu-list')}>
                            <li className={cx('menu-list-item')}>Smart Boots</li>
                            <li className={cx('menu-list-item')}>Biker Boots</li>
                        </ul>
                    </div>
                    <div className={cx('menu-right-item', 'col', 'l-6', 'l-o-1')}>
                        <div className={cx('menu-image-1')}>
                            <img
                                alt="menu-img"
                                src="https://baselondon.com/cdn/shop/files/All-Boots-2_686x324_crop_center.jpg?v=1673363526"
                            />
                            <h1 className={cx('image-des')}>All Boots</h1>
                        </div>
                        <div className={cx('menu-image-2')}>
                            <img
                                alt="menu-img"
                                src="https://baselondon.com/cdn/shop/files/Seymour-bannerArtboard-1_1920x804_crop_center_618eb136-b2b6-4f03-b08f-870951d53925_686x324_crop_center.png?v=1669809298"
                            />
                            <h1 className={cx('image-des')}>Chelsea Boots</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Collection */}
            <div
                style={{ transform: ` translateY(${position2})` }}
                className={cx('collection-menu', 'grid')}
                onMouseOut={noHover2}
                onMouseOver={handleHover2}
            >
                <div className={cx('row', 'no-gutters', 'menu-container-collection')}>
                    <div className={cx('collection-image-div', 'col', 'l-4')}>
                        <img
                            className={cx('collection-image')}
                            src="https://baselondon.com/cdn/shop/files/Summer-nav_686x324_crop_center.jpg?v=1686304559"
                        />
                        <h1 className={cx('collection-des')}>Summer Styles</h1>
                    </div>
                    <div className={cx('collection-image-div', 'col', 'l-4')}>
                        <img
                            className={cx('collection-image')}
                            src="https://baselondon.com/cdn/shop/files/date-night-2_686x324_crop_center.jpg?v=1673355268"
                        />
                        <h1 className={cx('collection-des')}>Sale</h1>
                    </div>{' '}
                    <div className={cx('collection-image-div', 'col', 'l-4')}>
                        <img
                            className={cx('collection-image')}
                            src="https://baselondon.com/cdn/shop/files/Pub-classics-2_686x324_crop_center.jpg?v=1673355611"
                        />
                        <h1 className={cx('collection-des')}>Pub Classics</h1>
                    </div>{' '}
                    <div className={cx('collection-image-div', 'col', 'l-4')}>
                        <img
                            className={cx('collection-image')}
                            src="https://baselondon.com/cdn/shop/files/Suede-2_686x324_crop_center.jpg?v=1673355787"
                        />
                        <h1 className={cx('collection-des')}>Suede Styles</h1>
                    </div>{' '}
                    <div className={cx('collection-image-div', 'col', 'l-4')}>
                        <img
                            className={cx('collection-image')}
                            src="https://baselondon.com/cdn/shop/files/All-footwear-NAV-1_686x324_crop_center.jpg?v=1673427977"
                        />
                        <h1 className={cx('collection-des')}>All Footwear</h1>
                    </div>{' '}
                    <div className={cx('collection-image-div', 'col', 'l-4')}>
                        <img
                            className={cx('collection-image')}
                            src="https://baselondon.com/cdn/shop/files/wedding-2_686x324_crop_center.jpg?v=1673356940"
                        />
                        <h1 className={cx('collection-des')}>Wedding Shoes</h1>
                    </div>{' '}
                    <div className={cx('collection-image-div', 'col', 'l-4')}>
                        <img className={cx('collection-image')} src="" />
                        <h1 className={cx('collection-des')}></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
