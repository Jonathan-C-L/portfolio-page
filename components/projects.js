/**
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 * Summary: projects.js is responsible for rendering the projects section of the page, which includes a grid of project cards with descriptions and links to repos
 */

import { ProjectsData } from "../data/projects.js";

export async function renderProjects(){
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  const data = await ProjectsData();
  data.forEach(project => {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = project.repo;
    card.target = "_blank";
    card.id = project.id;

    card.innerHTML = `
      <div class="card-body">
        <div class="card-title">${project.title}</div>
        <div class="card-desc">
          ${project.desc}<br><br>
          <i>LEARNED: ${project.learned}</i>
        </div>
      </div>
      <div class="card-footer">
        <a class="card-link" href="${project.repo}" target="_blank">View Repo</a>
      </div>
    `;

    grid.appendChild(card);
  });
}