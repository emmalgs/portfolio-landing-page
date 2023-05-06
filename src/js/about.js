import { renderNav } from "./projects";

export default function renderAbout() {
  renderNav();
  clearMainClass();
  setMainClass("info-container");
}