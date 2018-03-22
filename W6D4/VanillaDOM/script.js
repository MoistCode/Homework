document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const submitInput = document.querySelector("input[type='submit']");

  submitInput.addEventListener("click", (event) => {
    event.preventDefault();
    let textBox = document.querySelector("input[class='favorite-input']");
    let uLRest = document.querySelector("ul[id='restaurants']");
    let newList = document.createElement('LI')
    newList.textContent = textBox.value;
    uLRest.append(newList);
    textBox.value = "";
  });


  // adding new photos

  const photoToggleButton = document.querySelector(".photo-show-button")

  photoToggleButton.addEventListener("click", (event) => {
    let form = document.querySelector("div[class^='photo-form']");
    if (form.className === "photo-form-container hidden") {
      form.className = "photo-form-container";
    } else {
      form.className = "photo-form-container hidden";
    }
  });

  const sub = document.querySelector("input[class='photo-url-submit']");

  sub.addEventListener("click", (event) => {
    event.preventDefault();
    let photoUl = document.querySelector("ul[class='dog-photos']");
    let li = document.createElement('LI');
    let img = document.createElement('img');
    let urlText = document.querySelector("input[class='photo-url-input']");
    img.src = urlText.value;
    urlText.value = "";
    li.append(img);
    photoUl.append(li);
  });




});
