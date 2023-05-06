import { links, clearMain, renderHomeNav, setContainerClass, setMainClass, clearBlockStyle } from "./render.js";

export default function renderHome(){
  links();
  renderHomeNav();
  clearMain();
  setMainClass("main-container");
  setContainerClass("container");
  clearBlockStyle();

  const main = document.querySelector("#main");
  const blue = document.createElement("div");
  const green = document.createElement("div");
  const red = document.createElement("div");
  const yellow = document.createElement("div");
  const lightBlue = document.createElement("div");

  blue.classList = "blue";
  green.classList = "green";
  red.classList = "red";
  yellow.classList = "yellow";
  lightBlue.classList = "light-blue";

  main.append(blue, green, red, yellow, lightBlue);
}