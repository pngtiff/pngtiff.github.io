let phrases = [
    { text: "call your mom to ask how she's doing", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/social.png" }, 
    { text: "go through your old pictures on social media", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/social.png" }, 
    { text: "deconstruct the lyrics of your favorite rap song", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/rap.png" }, 
    { text: "read the latest discussions on your favorite subreddits", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/rap.png" }, 
    { text: "calculate your future salary at Facebook", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/sport.png" }, 
    { text: "think of smart responses to an argument you had last year", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/sport.png" }, 
    { text: "read the news online and argue with people in the comments section", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/social.png" }, 
    { text: "listen to sad songs and relive the mistakes of your youth", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/rap.png" }, 
    { text: "watch the trailer for a TV show and then the whole first season for bonus points", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/social.png" }, 
    { text: "consider taking a Data Science course", image: "https://code.s3.yandex.net/web-developer/procrastinator/images/sport.png" }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector(".button");
  let phrase = document.querySelector(".phrase");
  let advice = document.querySelector(".advice");
  let image = document.querySelector(".image");
  
  button.addEventListener("click", function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, "textContent", randomElement.text)
    smoothly(image, "src", randomElement.image)
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = "33px";
    } else {
      advice.style.fontSize = "42px";
    }
  });
  
  for (let i = 0; i <= 2; i++) {
    smoothly(phrase, "textContent", phrases[i].text);
    smoothly(image, "src", phrases[i].image);
  }