import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
    const [images, setImages] = useState([]);

    const handelFetchImage = (imageArr) => {
        setImages([...imageArr]);
    };

    return (
        <div>
            <SearchBar onSearch={handelFetchImage} />

            <ImageList images={images} />
        </div>
    );
};

export default App;
