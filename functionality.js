const maxChars = 160;

function updateCharacters() {
    const input = document.getElementById("tweetInput");
    const charCount = document.getElementById("charCount");
    const tweetBtn = document.getElementById("tweetBtn");

    let remaining = maxChars - input.value.length;

    if (remaining < 0) {
        charCount.textContent = "Character limit exceeded (160 max)";
        charCount.style.color = "red";
        tweetBtn.disabled = true;
    } else {
        charCount.textContent = remaining + " characters remaining";
        charCount.style.color = "black";
        tweetBtn.disabled = false;
    }
}

function postTweet() {
    alert("Tweet posted! (Demo only)");
}