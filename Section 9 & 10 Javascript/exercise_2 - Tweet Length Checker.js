// Write a function to extract the tweet legnth and ttell you how many chars you have left

function tweet_feature_extractor(tweet) {
    console.log(`You have written ${tweet.length} Characters, you have ${140 - tweet.length} characters left.`);
}

tweet_feature_extractor("This is an example string for testing.")
