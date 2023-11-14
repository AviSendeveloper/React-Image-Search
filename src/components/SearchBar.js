import { useState } from "react";
import fetchImage from "../api";
import "./SearchBar.css";

const Search = ({ onSearch }) => {
    const [input, setInput] = useState("cars");

    const handelSubmit = async (e) => {
        e.preventDefault();
        const images = await fetchImage(input);

        // passing value to parent component
        onSearch(images);
    };

    const handelChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handelSubmit}>
                <input
                    name="search-bar"
                    onChange={handelChange}
                    value={input}
                />
            </form>
        </div>
    );
};

export default Search;
