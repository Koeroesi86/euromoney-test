import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import NewsResponsive from '../news-responsive/NewsResponsive'
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

export function StoryTwo({news}) {
    return (
        <div className="StoryTwo">
            <h1>Story Two: Responsive news</h1>
            <hr/>
            {news.length === 0 && <LoadingIndicator/>}
            {news.length > 0 && <NewsResponsive news={news}/>}
        </div>
    )
}

StoryTwo.defaultProps = {
    news: []
};

StoryTwo.propTypes = {
    news: PropTypes.array
};

function mapStateToProps(state) {
    return {
        news: state.storyTwo.news
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryTwo)