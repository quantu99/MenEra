import Account from '../pages/Account/Account';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Products from '../pages/Products/Products';
import Register from '../pages/Register/Register';
import RegisterSuccess from '../pages/Register/RegisterSuccess';
import AllShoes from '../pages/Shoes/AllShoes';
import Brogues from '../pages/Shoes/Brogues';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: 'login', component: Login },
    { path: '/register', component: Register },
    { path: '/register-success', component: RegisterSuccess },
    { path: '/all-shoes', component: AllShoes },
    { path: '/brogues', component: Brogues },
    { path: '/my-account', component: Account },
];
export { publicRoutes };
