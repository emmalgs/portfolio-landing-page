import { links, renderTopNav, clearMain, setMainClass, setContainerClass, clearBlockStyle } from './../js/render';
import drawing from "./../assets/images/drawing.png";

export default function renderContact() {
  links();
  renderTopNav();
  clearMain();
  setMainClass("contact-container");
  setContainerClass("info-container");
  clearBlockStyle();

  createInfoCards("https://github.com/emmalgs", `Find me on Github: `, `@emmalgs`);
  createInfoCards("https://www.instagram.com/emma.gerigscott/", `Or on instagram to see paintings: `, `@emma.gerigscott`);
  createInfoCards("mailto:elgerig@gmail.com", `Or send me an email at: `, `elgerig@gmail.com`);
}

function createInfoCards(href, para, contactSrc) {
  const container = document.querySelector(".contact-container");
  const info = document.createElement("div");
  info.classList = "info";

  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";

  const image = document.createElement("img");
  image.src = drawing;
  
  const p = document.createElement("p");
  p.innerText = para;

  const span = document.createElement("span");
  span.innerText = contactSrc;

  a.append(image, p, span);
  info.append(a);
  container.append(info);
}