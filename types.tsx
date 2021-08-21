/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewTweet: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Messages: undefined;
  Notifications: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type IUser = {
  username: string;
  name: string;
  id: string;
  image: string;
}
export type ITweet = {
  id: string;
  user: IUser,
  content: string;
  createdAt: string;
  numberOfComments: number;
  numberOfRetweets: number
  numberOfLikes: number;
  image: string;
}

