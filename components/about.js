/**
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 * Summary: about.js is responsible for rendering the about section of the page, which includes a brief description and a list of skills
 */

import { AboutMeData } from "../data/about.js";

export function renderAbout(){
  const data = AboutMeData();

  // Text
  document.getElementById("about-text-content").textContent = data.desc;

  // Skills
  const container = document.getElementById("skills-block");
  container.innerHTML = "";
  Object.keys(data.skills).forEach(category => {
    const row = document.createElement("div");
    row.className = "skill-row";
    row.innerHTML = `<div class="skill-row-label">${category}</div><div class="skill-pills">${
      data.skills[category].map(s => `<span class="pill">${s}</span>`).join("")
    }</div>`;
    container.appendChild(row);
  });
}