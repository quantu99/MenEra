import Account from '../pages/Account/Account';
import Cart from '../pages/Cart/Cart';
import Contact from '../pages/HelpCentre/Contact';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import MyOrder from '../pages/MyOrder/MyOrder';
import MyOrderDetail from '../pages/MyOrder/MyOrderDetail';
import MyOrderHistory from '../pages/MyOrderHistory/MyOrderHistory';
import MyOrderHistoryDetail from '../pages/MyOrderHistory/MyOrderHistoryDetail';
import Order from '../pages/Order/Order';
import OrderDone from '../pages/Order/OrderDone';
import Payment from '../pages/Order/Payment';
import Shipping from '../pages/Order/Shipping';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import Register from '../pages/Register/Register';
import RegisterSuccess from '../pages/Register/RegisterSuccess';
import AllBoots from '../pages/Shoes/AllBoots';
import AllShoes from '../pages/Shoes/AllShoes';
import Biker from '../pages/Shoes/Biker';
import Brogues from '../pages/Shoes/Brogues';
import CasualShoes from '../pages/Shoes/CasualShoes';
import Chelsea from '../pages/Shoes/Chelsea';
import Chukka from '../pages/Shoes/Chukka';
import FormalShoes from '../pages/Shoes/FormalShoes';
import Loafers from '../pages/Shoes/Loafers';
import PubClassic from '../pages/Shoes/PubClassic';
import Smart from '../pages/Shoes/Smart';
import Suede from '../pages/Shoes/Suede';
import Wedding from '../pages/Shoes/Wedding';
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
    { path: '/all-boots', component: AllBoots },
    { path: '/chukka', component: Chukka },
    { path: '/chelsea', component: Chelsea },
    { path: '/smart-boots', component: Smart },
    { path: '/biker', component: Biker },
    { path: '/pub', component: PubClassic },
    { path: '/suede', component: Suede },
    { path: '/wedding', component: Wedding },
    { path: '/:id', component: ProductDetail },
    { path: '/my-cart', component: Cart },
    { path: '/my-wishlist', component: WishList },
    { path: '/my-order', component: MyOrder },
    { path: '/my-order-detail/:id', component: MyOrderDetail },
    { path: '/my-order-history', component: MyOrderHistory },
    { path: '/my-order-history-detail/:id', component: MyOrderHistoryDetail },
    { path: '/order-info', component: Order },
    { path: '/order-shipping', component: Shipping },
    { path: '/order-payment', component: Payment },
    { path: 'order-complete', component: OrderDone },
    { path: '/my-account', component: Account },
    { path: '/help/contact', component: Contact },
];
export { publicRoutes };
