import React from "react";
import PropTypes from 'prop-types';

// direct destructuring
function Picture({ imgUrl, alt }) {
    return <img 
    src={imgUrl} 
    alt={alt}
    />
}

Picture.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired,
}

// props way
// function Picture(props) {
//     const {imgUrl, alt} = props;

//     return <img 
//     src={imgUrl} 
//     alt={alt}
//     />
// }

export default Picture;