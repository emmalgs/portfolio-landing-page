import { links, renderTopNav, clearMain, setMainClass, setContainerClass } from './../js/render';
import portrait from "./../assets/images/portrait.jpg";

export default function renderAbout() {
  links();
  renderTopNav();
  clearMain();
  setMainClass("about-container");
  setContainerClass("info-container");

  const colorBlock = document.createElement("div");
  colorBlock.classList = "color-block";
  document.querySelector("#nav").after(colorBlock);

  createAboutInfo();
}

function createAboutInfo() {
  const containerDiv = document.querySelector(".about-container")
  const imageDiv = document.createElement("div");
  imageDiv.classList = "profile-img";

  const image = document.createElement("img");
  image.src = portrait;
  image.alt = "head shot of Emma Gerigscott";
  imageDiv.append(image);

  const aboutDiv = document.createElement("div");
  aboutDiv.classList = "about";

  const link = document.createElement("a");
  link.href = "https://www.epicodus.com/"
  link.target = "_blank";
  link.innerText = "Epicodus.";
  const p = document.createElement("p");
  p.innerText = `Hi there! I'm Emma Gerigscott. I'm an artist, cook, and web developer in Portland OR. I'm currently in a fullstack program at `;
  p.append(link);

  const p2 = document.createElement("p");
  p2.innerText = `I built this site using Node.js and vanilla JS. I'm currently studying C# and .NET. I also make paintings!`;

  aboutDiv.append(p, p2);
  containerDiv.append(imageDiv, aboutDiv);
}