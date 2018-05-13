import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import NewsResponsive from '../news-responsive/NewsResponsive'
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

export function StoryThree({news}) {
    return (
        <div className="StoryThree">
            <h1>Story Three:{" "}
                <a
                    href="https://newsapi.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    News API
                </a>{" "}
                results [UK news]</h1>
            <hr/>
            {news.length === 0 && <LoadingIndicator/>}
            {news.length > 0 && <NewsResponsive news={news}/>}
        </div>
    )
}

StoryThree.defaultProps = {
    news: []
};

StoryThree.propTypes = {
    news: PropTypes.array
};

function mapStateToProps(state) {
    return {
        news: state.storyThree.news
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryThree)