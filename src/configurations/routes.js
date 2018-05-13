import StoryOne from '../components/story-one/StoryOne'
import StoryTwo from "../components/story-two/StoryTwo";
import StoryThree from "../components/story-three/StoryThree";
import StoryFour from "../components/story-four/StoryFour";

export const defaultPath = '/story-1';

export const routes = [
    {
        path: '/story-1',
        component: StoryOne,
        menu: 'Story 1'
    },
    {
        path: '/story-2',
        component: StoryTwo,
        menu: 'Story 2'
    },
    {
        path: '/story-3',
        component: StoryThree,
        menu: 'Story 3'
    },
    {
        path: '/story-4',
        component: StoryFour,
        menu: 'Story 4'
    }
];