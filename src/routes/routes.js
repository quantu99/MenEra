import Account from '../pages/Account/Account';
import Cart from '../pages/Cart/Cart';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Order from '../pages/Order/Order';
import OrderDone from '../pages/Order/OrderDone';
import Payment from '../pages/Order/Payment';
import Shipping from '../pages/Order/Shipping';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Register from '../pages/Register/Register';
import RegisterSuccess from '../pages/Register/RegisterSuccess';
import AllShoes from '../pages/Shoes/AllShoes';
import Brogues from '../pages/Shoes/Brogues';
import CasualShoes from '../pages/Shoes/CasualShoes';
import FormalShoes from '../pages/Shoes/FormalShoes';
import Loafers from '../pages/Shoes/Loafers';
import WorkShoes from '../pages/Shoes/WorkShoes';
import WishList from '../pages/WishList/WishList';
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'login', component: Login },
    { path: '/register', component: Register },
    { path: '/register-success', component: RegisterSuccess },
    { path: '/all-shoes', component: AllShoes },
    { path: '/brogues', component: Brogues },
    { path: '/formal-shoes', component: FormalShoes },
    { path: '/work-shoes', component: WorkShoes },
    { path: '/casual-shoes', component: CasualShoes },
    { path: '/loafers', component: Loafers },
    { path: '/:id', component: ProductDetail },
    { path: '/my-cart', component: Cart },
    { path: '/my-wishlist', component: WishList },
    { path: '/order-info', component: Order },
    { path: '/order-shipping', component: Shipping },
    { path: '/order-payment', component: Payment },
    { path: 'order-complete', component: OrderDone },
    { path: '/my-account', component: Account },
];
export { publicRoutes };
