/**
 * Summary: main.js contains all of the js functions that are related to the dom creations and manipulations of the main page of the landing-page
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
console.log("main.js connected");

function renderAbout(){
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

function renderProjects(){
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";
  ProjectsData().forEach(project => {
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
          <i>Learned: ${project.learned}</i>
        </div>
      </div>
      <div class="card-footer">
        <a class="card-link" href="${project.repo}" target="_blank">View Repo</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderContact(){
  const card = document.getElementById("contact-card");
  card.innerHTML = "";
  ContactData().forEach(item => {
    const row = document.createElement("div");
    row.className = "contact-row";

    if(item.href){
      row.innerHTML = `
        <div class="contact-icon">${item.icon}</div>
        <div>
          <div class="contact-label">${item.label}</div>
          <a class="contact-value" href="${item.href}" target="${item.href.startsWith('http') ? '_blank' : '_self'}">${item.value}</a>
        </div>
        <span class="copy-hint">click to copy</span>
      `;
    } else {
      row.innerHTML = `
        <div class="contact-icon">${item.icon}</div>
        <div>
          <div class="contact-label">${item.label}</div>
          <span class="contact-value">${item.value}</span>
        </div>
        <span class="copy-hint">click to copy</span>
      `;
    }

    row.addEventListener("click", () => copyToClipboard(item.value));
    card.appendChild(row);
  });
}