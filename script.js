function btnReaksi1() {
  var shapeReact = document.getElementById("shapeReact");
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");
  var textContent = document.getElementById("textContent");

  document.removeEventListener("click", handleClick1);

  function handleClick1() {
    shapeReact.style.width = "100%";
    shapeReact.style.background = "red";
    shapeReact.style.transition = "width 1s";

    if ((shapeReact.innerHTML = "Ahhh Croott!!!")) {
      shapeReact.style.color = "white";
      shapeReact.style.fontWeight = "bold";
      shapeReact.style.justifyContent = "center";
      shapeReact.style.display = "flex";
      shapeReact.style.alignItems = "center";
      textContent.innerHTML =
        "Anda minat dengan saya?, Join Michatku yaa... @wanita_tobrut99";
      textContent.style.marginTop = "50px";
      textContent.style.transition = "transform 2s";
      textContent.style.transform = "translateX(10px)";
    }
    img1.style.display = "block";
    img2.style.display = "none";
  }

  document.addEventListener("click", handleClick1);
}

function btnReaksi2() {
  var shapeReact = document.getElementById("shapeReact");
  var img2 = document.getElementById("img2");
  var img1 = document.getElementById("img1");
  var textContent = document.getElementById("textContent");

  document.removeEventListener("click", handleClick2);

  function handleClick2() {
    shapeReact.style.width = "100px";
    shapeReact.style.background = "chocolate";
    shapeReact.style.transition = "width 1s";
    textContent.innerHTML =
      "Jangan ya nakk... mending ikut Om Login aja heheheh";
    img2.style.display = "block";
    img1.style.display = "none";
    shapeReact.innerHTML = "Normal ";
    textContent.style.marginTop = "30px";
    textContent.style.transition = "transform 2s";
    textContent.style.transform = "translateX(10px)";
  }

  document.addEventListener("click", handleClick2);
}
