import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import NewsResponsive from '../news-responsive/NewsResponsive'
import LoadingIndicator from "../loading-indicator/LoadingIndicator";

export function StoryFour({news}) {
    return (
        <div className="StoryFour">
            <h1>Story Four:{" "}
                <a
                    href="https://newsapi.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    News API
                </a>{" "}
                results [UK news]</h1>
            <p>This is a placeholder page for the upcoming custom API</p>
            <hr/>
            {news.length === 0 && <LoadingIndicator/>}
            {news.length > 0 && <NewsResponsive news={news}/>}
        </div>
    )
}

StoryFour.defaultProps = {
    news: []
};

StoryFour.propTypes = {
    news: PropTypes.array
};

function mapStateToProps(state) {
    return {
        news: state.storyFour.news
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StoryFour)