import ImageShow from "./ImageShow";
import "./ImageList.css";

const ImageList = ({ images }) => {
    return (
        <div className="image-list">
            {images.map((image) => {
                return <ImageShow key={image.id} image={image.url} />;
            })}
        </div>
    );
};

export default ImageList;
