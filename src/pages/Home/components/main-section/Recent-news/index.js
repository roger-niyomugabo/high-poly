import './index.css';
import rectangle22 from '../../../../../assets/images/rectangle 22.png';
import DiscoverButton from '../../../../../components/Discover-button';

const RecentNews = () => {
    return (
        <div className="main">
            <div className='recent'>
                <hr id='line'/>
                <p>Recent News</p>
            </div>
            <div className='main-content'>
                <div className='content'>
                    <p>We're focused</p>
                    <p>We provide an exceptional service by only focusing <br /> on hair A. Our goal is to provide a different type of <br /> experience by using responsible products</p>
                    <DiscoverButton />
                </div>
                <div>
                    <img src={rectangle22} alt="main-sectionImage" />
                </div>
            </div>
        </div>
    );
}

export default RecentNews;
