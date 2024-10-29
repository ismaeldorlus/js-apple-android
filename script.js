// Controlling CSS and Attributes from JS

// document.getElementById("some-id").style; // Accesses CSS rule for the "some-id" element.

// document.getElementById("android").style.border = "2px solid white";

// document.getElementById("some-image").src = "images/newpic.jpg"  // Changes an image

// document.getElementById("some-a-tag").href = "http://newlink.com"; // Change the hyper

// Changing an image vs adding a new image
// To add an image where there wasnt one before you need a container for the image in HTML
// Containers are empty paragraphs, h1s, or div elements
// For E.g. In html: <div id="img-container"> </div>

// document.getElementById("img-container").innerHTML = "<a> click here </a>";

// Apple vs Android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  document.getElementById("logo").src = "images/Android-Logo.jpg";
  document.getElementById("the-link").innerHTML = "Android Home";
  document.getElementById("the-link").style.background = "#a4c93b";
  document.getElementById("the-link").href = "https://www.android.com/";
  document.getElementById("the-html").style.background = "#a4c93b";
  document.getElementById("the-body").style.fontFamily = "'Roboto', sans-serif";
  document.getElementById("android").classList.add("redborder");
  document.getElementById("apple").classList.remove("redborder");
}

// Change the android vs apple image to the android logo in the images folder
document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("logo").src = "images/Apple-Logo.jpg";
  document.getElementById("the-link").innerHTML = "Apple Home";
  document.getElementById("the-link").style.background = "#b6bcca";
  document.getElementById("the-link").href = "https://www.apple.com/";
  document.getElementById("the-html").style.background = "#b6bcca";
  document.getElementById("android").classList.remove("redborder");
  document.getElementById("apple").classList.add("redborder");
}
