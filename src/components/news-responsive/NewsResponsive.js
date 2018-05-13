import React from 'react'
import PropTypes from 'prop-types'
import {Col} from 'react-bootstrap'
import './NewsResponsive.scss'

export default function NewsResponsive({news, dateFormat}) {
    return (
        <div className="NewsResponsive">
            {news && news.map((item, i) => (
                <Col
                    key={`NewsResponsive-item-${i}`}
                    xs={12}
                    sm={6}
                    md={3}
                >
                    <a
                        className="NewsResponsive-item"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div
                            className="NewsResponsive-item-image"
                            style={{backgroundImage: item.urlToImage && `url(${item.urlToImage})`}}
                        />
                        <div className="NewsResponsive-item-text-contents">
                            <div className="NewsResponsive-item-title">
                                {item.title}
                            </div>
                            <div className="NewsResponsive-item-meta">
                                <span className="NewsResponsive-item-meta-author">
                                    {item.author}
                                </span>
                                <span className="NewsResponsive-item-meta-published">
                                    {item.publishedAt.format(dateFormat)}
                                </span>
                            </div>
                            <div className="NewsResponsive-item-description">
                                {item.description}
                            </div>
                        </div>
                    </a>
                </Col>
            ))}
        </div>
    )
}

NewsResponsive.defaultProps = {
    news: [],
    dateFormat: "Do MMMM YYYY, HH:mm:ss",
};

NewsResponsive.propTypes = {
    news: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        urlToImage: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.string,
        publishedAt: PropTypes.shape({
            format: PropTypes.func
        })
    })),
    dateFormat: PropTypes.string,
};