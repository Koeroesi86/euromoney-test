import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import News from '../news/News'
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

export function StoryOne({news}) {
    return (
        <div className="StoryOne">
            <h1>Story One: Raw news feed</h1>
            <hr/>
            {news.length === 0 && <LoadingIndicator/>}
            {news.length > 0 && <News news={news}/>}
        </div>
    )
}

StoryOne.defaultProps = {
    news: []
};

StoryOne.propTypes = {
    news: PropTypes.array
};

function mapStateToProps(state) {
    return {
        news: state.storyOne.news
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryOne)