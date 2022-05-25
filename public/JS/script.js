async function fetchTweets() {
  const response = await fetch(
    "https://api.airtable.com/v0/app2Iqaf7kUsEQtFN/Tweets?maxRecords=13&view=Grid%20view",
    {
      headers: {
        Authorization: "Bearer keyc1dESEr0Izb4Mp",
      },
    }
  );

  const tweets = await response.json();
  tweets.records.map((tweet) => creationTweet(tweet.fields));
}
fetchTweets();

const creationTweet = (tweet) => {
  // prettier-ignore
  const cardMarkup = `
    <div class="tweet">
        <div class="top-tweet-content">
          ${tweet.user_tag == "@William_ft" ? `<img src="public/IMG/Icons/william_profil.svg" alt="" class="post-tweet-img">` : `<img src="public/IMG/Icons/esd_profil.svg" alt="" class="post-tweet-img">`}
            <h2 class="tweet-username">${tweet.user_name[0]} <span class="gray">${tweet.user_tag[0]} ● ${tweet.time}mn</span></h2>
         </div>

        <div class="tweet-content">
          <p class="tweet-text">
            ${tweet.message}
          </p>
          ${tweet.photo ? `<img src="${tweet.photo}" alt="" class="tweet-img">` : "" } 
        </div>
    </div>
    `

  const tweetSection = document
    .querySelector(".tweet-container")
    .insertAdjacentHTML("afterbegin", cardMarkup);

  window.scrollTo(0, document.body.scrollHeight);
};
