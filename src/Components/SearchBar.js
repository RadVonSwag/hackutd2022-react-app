import './SearchBar.css';
import {useState} from 'react'; 


// receives props from database 
const SearchBar = (props) => {

    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        //console.log(e.target.value);
    }


    return ( 
        <div className="search-wrapper">
            <div className="search-input">
                <input 
                    type="text"
                    placeholder="Enter a meal..."
                    value={searchInput}
                    onChange={handleChange}
                 />
            </div>
            <div>
                <div className="search-results">
                    {}
                </div>
            </div>

        </div> 
    );
}
 
export default SearchBar;