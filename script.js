const textAreaValue = document.querySelector(".tweet-textarea");
const usernameValue = document.querySelector(".username");
const subBtn = document.querySelector(".sub-btn");
const deleteButs = document.querySelectorAll(".tweet .deleteBut");
const tweetsContainer = document.querySelector(".all-tweets");

const tweetsData = [];



subBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (textAreaValue.value.length > 0 && usernameValue.value){
    tweetsData.unshift({
      id: Math.random() * 1102,
      text: textAreaValue.value,
      username: usernameValue.value,
    });
  
    textAreaValue.value= "";
    usernameValue.value= "";
    renderTweet(tweetsData);
  }
  else{
    alert("Invalid Data, Try agine :)")
  }

  
});

const deleteTweet = (tweetID) => {
  const deleteedIndex= tweetsData.findIndex( tw=> tw.id == tweetID )
  tweetsData.splice(deleteedIndex, 1);
  
  renderTweet(tweetsData)
};



const renderTweet = (tweetArr=[]) => {
    console.table(tweetArr)
    tweetsContainer.innerHTML = "";
    tweetArr.forEach((tw) => {
      const tweet = document.createElement("div");
      tweet.classList.add("tweet");
  
      tweet.innerHTML = `
      <div>
        <h3 class="user">@${tw.username}</h3>
        <button class="deleteBut" tweetID="${tw.id}" >delete</button>
      </div>
      <p>${tw.text}</p>`;
  
      tweetsContainer.appendChild(tweet);
    });
  
    const deleteButs = document.querySelectorAll(".tweet .deleteBut");
  
    deleteButs.forEach((btn) => {
      console.log("btn Data", btn)
  
      btn.addEventListener("click", () => {
        deleteTweet(btn.getAttribute("tweetID"));
      });
    });
};
