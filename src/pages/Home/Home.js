import Collection from '../../components/Layouts/Collection/Collection';
import CollectionThumbnail from '../../components/Layouts/CollectionThumbnail/CollectionThumbnail';
import Footer from '../../components/Layouts/Footer/Footer';
import Header from '../../components/Layouts/Header/Header';
import Kind from '../../components/Layouts/Kind/Kind';
import Popular from '../../components/Layouts/Popular/Popular';
import Thumbnail from '../../components/Layouts/Thumbnail/Thumpnail';
import Trending from '../../components/Layouts/Trending/Trending';
import WatchThumbnail from '../../components/Layouts/WatchThumbnail/WatchThumbnail';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Thumbnail />
            <Popular />
            <WatchThumbnail />
            <Trending />
            <CollectionThumbnail />
            <Collection />
            <Kind />
            <Footer />
        </div>
    );
}

export default Home;
