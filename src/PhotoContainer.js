import React from "react";
import Photo from "./Photo";

const PhotoContainer = props => {

    const displayPhoto = () => {
            return <Photo url={props.photo.message} />;
    }

    return(
        <>
            <section> { displayPhoto() } </section>
        </>
    );
}

export default PhotoContainer;