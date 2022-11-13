import './Home.css';
import SearchBar from './SearchBar';
import Squiggle from './squiggle.svg';

const Home = () => {
    return ( 
        <div className="home-container">
            <p className="welcome">What are you craving today?</p>
            <SearchBar/>
            {/* <img className="squiggle-friend" src={Squiggle} alt="Squiggle" /> */}
        </div>
     );
}
 
export default Home;