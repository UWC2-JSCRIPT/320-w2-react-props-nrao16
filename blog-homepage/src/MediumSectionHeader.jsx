import './App.css';
import { React } from "react";
import PropTypes from 'prop-types';

function MediumSectionHeader({ sectionTitle }) {

    return (
        <div>
            <h2>
                {sectionTitle}
            </h2>
            <hr className="hr2"></hr>
        </div>
    )
}

MediumSectionHeader.propTypes = {
    sectionTitle: PropTypes.string.isRequired,
}


export default MediumSectionHeader;