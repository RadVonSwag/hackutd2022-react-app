import { useEffect, useState } from "react";
import data from "../data/menuitems.json";

const SearchResultsList = () => {
    const [results, setResults] = useState(data);

    return (
        <div className="list">
            { results && results.map((result) => (
                <div className="listview" key={result.id}>
                    <h1>{result.title}</h1>
                    <h4>{result.restaurantChain}</h4>
                    <img alt="food" src={result.image}/>
                </div>
            ))}
        </div>
    );
}

export default SearchResultsList;