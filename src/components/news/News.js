import React from 'react'
import PropTypes from 'prop-types'
import {Image} from 'react-bootstrap'
import './News.scss'

export default function News({news, dateFormat, dateInputFormat}) {
    return (
        <div className="News">
            {news && news.map((item, i) => (
                <a
                    key={`news-item-${i}`}
                    className="News-item"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="News-item-image">
                        <Image src={item.urlToImage} bsClass="News-item-image" thumbnail/>
                    </div>
                    <div className="News-item-text-contents">
                        <div className="News-item-title">
                            {item.title}
                        </div>
                        <div className="News-item-meta">
                            <span className="News-item-meta-author">
                                {item.author}
                            </span>
                            <span className="News-item-meta-published">
                                {item.publishedAt.format(dateFormat)}
                            </span>
                        </div>
                        <div
                            className="News-item-description"
                        >
                            {item.description}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    )
}

News.defaultProps = {
    news: [],
    dateFormat: "Do MMMM YYYY, HH:mm:ss",
};

News.propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        urlToImage: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.string,
        publishedAt: PropTypes.shape({
            format: PropTypes.func
        }),
    })),
    dateFormat: PropTypes.string,
    dateInputFormat: PropTypes.string,
};