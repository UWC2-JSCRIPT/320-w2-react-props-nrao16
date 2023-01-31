import React from "react"
import PropTypes from 'prop-types';

function getMonth(dateString) {
    return new Date(dateString).toLocaleString('en-US', { month: 'long' });
}

function getDay(dateString) {
    return new Date(dateString).toLocaleString('en-US', { day: 'numeric' });
}

const AvatarComponent = ({ author: { isMediumMember, image } }) => {
    return (<img className={isMediumMember ? "avatar-blue" : "avatar"}
        src={image}
        alt="Author"
    />);
};

const MemberPreviewComponent = ({ memberPreview }) => {
    return (memberPreview && <p className="grey-text">Member Preview</p>);
};

const AudioAvailableComponent = ({ hasAudioAvailable }) => {
    return (hasAudioAvailable &&
        <p className="grey-text">Audio Available</p>);
}

function MediumArticle({ article,
    article: { image, title, description, hasAudioAvailable, link, author, postedDate, minutesToRead, memberPreview } }) {
    return (
        <div className="container">
            <div className="column">
                <img
                    src={image}
                    alt="Article"
                />
            </div>
            <div className="column">
                <AudioAvailableComponent hasAudioAvailable={hasAudioAvailable} />
                <h2>
                    <a href={link}>{title}</a>
                </h2>
                <p>
                    {description}
                </p>
                <div className="column">
                    <AvatarComponent author={author}
                    />
                </div>
                <div className="column">
                    <p>
                        {author.name}
                    </p>
                    <p>
                        {getMonth(postedDate)} {getDay(postedDate)} * {minutesToRead} min read
                    </p>
                    <MemberPreviewComponent memberPreview={memberPreview} />

                    <p className="bookmarkRibbon"></p>
                </div>
            </div>
        </div>
    );
};

MediumArticle.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string,
            isMediumMember: PropTypes.bool
        }),
        postedDate: PropTypes.string.isRequired,
        minutesToRead: PropTypes.number,
        hasAudioAvailable: PropTypes.bool,
        memberPreview: PropTypes.bool,
    })
}

export default MediumArticle;