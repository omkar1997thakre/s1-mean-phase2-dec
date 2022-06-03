import { ITweet } from "./Itweet";

export class TweetSender implements ITweet{
    postTweet(){
        console.log("Tweet is Posted");
    }
}