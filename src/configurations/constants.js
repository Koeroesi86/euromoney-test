import moment from "moment/moment";

export const ERROR_MESSAGE_TIMEOUT = 10000;

// Local news.json file location
export const LOCAL_FEED_URL = './static/news.json';

// News API configuration
export const NEWS_API_KEY = '7b064ec3364e43a3a4c1b04f9cdf6565';
export const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${NEWS_API_KEY}`;

// Custom API configuration
export const CUSTOM_API_URL = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=7b064ec3364e43a3a4c1b04f9cdf6565`;
export const CUSTOM_API_ARTICLES_FIELD = 'articles';
export const CUSTOM_API_ARTICLES_MAPPING = {
    author: item => item.author,
    title: item => item.title,
    description: item => item.description,
    url: item => item.url,
    urlToImage: item => item.urlToImage,
    publishedAt: item =>
        moment(
            item.publishedAt,
            [
                "YYYY-MM-DDTHH:mm:ssZ",
                "YYYY-MM-DDTHH:mm:ss.SSSZ"
            ],
            true
        )
};