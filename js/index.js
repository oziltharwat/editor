let saturate = document.querySelector("#saturate");
let contrast = document.querySelector("#contrast");
let brightness = document.querySelector("#brightness");
let sepia = document.querySelector("#sepia");
let grayscale = document.querySelector("#grayscale");
let blur = document.querySelector("#blur");
let huerotate = document.querySelector("#huerotate");
let Upload = document.querySelector("#Upload");
let download = document.querySelector("#download");
let img = document.querySelector("#img");
let imgbox = document.querySelector(".img-box");
let reste = document.querySelector("span");
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
function resetValue() {
  ctx.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  huerotate.value = "0";
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

window.onload = function () {
  download.style.display = "none";
  reste.style.display = "none";
  imgbox.style.display = "none";
};

Upload.onchange = function () {
  resetValue();
  download.style.display = "block";
  reste.style.display = "block";
  imgbox.style.display = "block";
  let file = new FileReader();

  file.readAsDataURL(Upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
};
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${huerotate.value}deg)
   `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});
 function ik() {
  download.href = canvas.toDataURL();
};
