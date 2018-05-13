export const STORY_THREE_RECEIVE_NEWS = 'STORY_THREE_RECEIVE_NEWS';

export function storyThreeReceiveNews(news) {
    return {
        type: STORY_THREE_RECEIVE_NEWS,
        news
    }
}