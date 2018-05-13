export const STORY_TWO_RECEIVE_NEWS = 'STORY_TWO_RECEIVE_NEWS';

export function storyTwoReceiveNews(news) {
    return {
        type: STORY_TWO_RECEIVE_NEWS,
        news
    }
}