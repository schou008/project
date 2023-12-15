function animateText() {
  const input = document.querySelector("h1#animatedText");
  const str = input.textContent;
  const letters = str.split("");

  for (let i=0; i < letters.length; i++) {
    input.innerHTML += "<span>" + letters[i] + "</span>";
  }

  let index = 0;
  let interval = setInterval(displayLetters, 50);

  function displayLetters() {
    const letter = input.querySelectorAll('span')[index];
    letter.classList.add('fade');
    index++;
    if (index === letters.length) {
      clearInterval(interval);
      interval = null;
    }
  }
    function goToAboutMe(){
    window.location.href = "about-me.html";
}

}
