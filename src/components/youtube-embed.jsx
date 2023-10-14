// import libraries
import React from "react";
import PropTypes from "prop-types";

// Youtube video parameters
const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        <iframe
            width="854"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            allowFullScreen
            title="HS3 Trailer"
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};
// Export to call it
export default YoutubeEmbed;