import './SearchBar.css';
import {useState} from 'react'; 


// receives props from database 
const SearchBar = (props) => {


    return ( 
        <div className="search-wrapper">
            <div className="search-input">
                <input 
                    type="text"
                    placeHolder="Enter a meal..."
                 />
            </div>
        </div> 
    );
}
 
export default SearchBar;