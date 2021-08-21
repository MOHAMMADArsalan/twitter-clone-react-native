import { ITweet } from "../types";
const tweets: ITweet[] = [{
    id: 't1',
    user: {
        username: "muhammad",
        name: "Muhammad Arsalan",
        image: 'https://media-exp1.licdn.com/dms/image/C5103AQG9YEoyswOuGQ/profile-displayphoto-shrink_100_100/0/1517550363719?e=1634774400&v=beta&t=Y7cvQGb1bwqdhXK_H_ovmcV6-Wox5HN6D9buYSMbADk',
        id: 'u1'
    },
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: 'https://scx2.b-cdn.net/gfx/news/2019/2-nature.jpg',
    createdAt: "Mon Jan 29 2007 00:00:00 GMT+0500 (Pakistan Standard Time)",
    numberOfComments: 123,
    numberOfRetweets: 12,
    numberOfLikes: 10
}]

export default tweets;