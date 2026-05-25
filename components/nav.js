const navLink = {
    "About": "about",
    "Projects": "projects",
    "Contact": "contact"
};

export function renderNav(){
  const nav = document.getElementById("nav-links");

  Object.keys(navLink).forEach(key => {
    const link = document.createElement("a");
    link.textContent = key;
    link.onclick = () => showSection(navLink[key]);
    nav.appendChild(link);
  });
}

export function showSection(id){
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  // close mobile nav
  document.getElementById("nav-links").classList.remove("open");
}