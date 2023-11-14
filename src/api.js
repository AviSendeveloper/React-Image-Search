import axios from "axios";

const API_END_POINT = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "6v9LH5uI0HkEaz21Bn1n4rjnjGAEC1ngokpeXpdnMQY";

const fetchImage = async (term) => {
    const response = await axios.get(API_END_POINT, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        params: {
            query: term,
        },
    });

    console.log(response.data.results);

    const images = response.data.results.map((el) => {
        return {
            id: el.id,
            url: el.urls.small,
        };
    });

    return images;
};

export default fetchImage;
