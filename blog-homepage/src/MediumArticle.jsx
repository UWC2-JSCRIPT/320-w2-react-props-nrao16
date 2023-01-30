import React from "react"
import PropTypes from 'prop-types';

function getMonth(dateString){
    return new Date(dateString).toLocaleString('en-US', { month: 'long' });
}

function getDay(dateString){
    return new Date(dateString).toLocaleString('en-US', { day: '2-digit' });
}

function MediumArticle({ article }) {
    console.log(article)
    return (
        // <div className="column">
            <div className="card">
                <img
                    src={article.image}
                    alt={"Article image"}
                />
                <div className="container">
                    <h2>
                        {article.title}
                    </h2>
                    <p>
                        {article.description}
                    </p>
                    <div className="column">
                    <img className="avatar"
                        src={article.author.image}
                        alt={"Author image"}
                    />
                    </div>
                    <div className="column">
                    <p>
                        {article.author.name}
                    </p>
                    {article.author.isMediumMember}
                    <p>
                    {getMonth(article.postedDate)} {getDay(article.postedDate)} * {article.minutesToRead} min read 
                    </p>
                    
                    {article.memberPreview}
                    </div>
                </div>
            </div>
        // </div>
    );
};

MediumArticle.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.isRequired,
    description: PropTypes.string.isRequired,
}

export default MediumArticle;