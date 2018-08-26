window.addEventListener("load", () => {
  //start your code here
  document.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('passwordLength');
    let passwordLength = input.value;
    let lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split();
  });
});
