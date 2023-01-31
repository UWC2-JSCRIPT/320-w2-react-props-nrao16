import React from "react"
import PropTypes from 'prop-types';

function getMonth(dateString) {
    return new Date(dateString).toLocaleString('en-US', { month: 'long' });
}

function getDay(dateString) {
    return new Date(dateString).toLocaleString('en-US', { day: 'numeric' });
}

const AvatarComponent = ({ author }) => {
    return (<img className={author.isMediumMember ? "avatar-blue" : "avatar"}
        src={author.image}
        alt="Author"
    />);
};

function MediumArticle({ article }) {
    return (
        <div className="container">
            <div className="column">
                <img
                    src={article.image}
                    alt="Article"
                />
            </div>
            <div className="column">
                {article.hasAudioAvailable &&
                    <p className="grey-text">Audio Available</p>
                }
                <h2>
                    <a href={article.link}>{article.title}</a>
                </h2>
                <p>
                    {article.description}
                </p>
                <div className="column">
                    <AvatarComponent author={article.author}
                    />
                </div>
                <div className="column">
                    <p>
                        {article.author.name}
                    </p>
                    <p>
                        {getMonth(article.postedDate)} {getDay(article.postedDate)} * {article.minutesToRead} min read
                    </p>
                    {article.memberPreview &&
                        <p className="grey-text">Member Preview</p>
                    }
                    <p className="bookmarkRibbon"></p>
                </div>
            </div>
        </div>
    );
};

MediumArticle.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

}

export default MediumArticle;