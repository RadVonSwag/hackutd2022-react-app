import './Home.css';
import SearchBar from './SearchBar';

const Home = () => {
    return ( 
        <div className="home-container">
            <p className="welcome">What are you craving today?</p>
            <SearchBar/>
        </div>
     );
}
 
export default Home;