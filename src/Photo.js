import React from 'react';

const Photo = (props) => {
    console.log("photo url ::::" + props.url);
    return (
        <section>
            <img src={props.url} alt="sup dog!"/>
        </section>
    )
}

export default Photo;