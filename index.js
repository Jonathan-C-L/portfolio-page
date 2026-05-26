/**
 * Summary: index.js is the main entry point for the rest of the js files and will render the client-side elements
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
import { renderContact } from "./components/contact.js";
import { renderProjects } from "./components/projects.js";
import { renderAbout } from "./components/about.js";
import { renderNav } from "./components/nav.js";
import { renderHero } from "./components/hero.js";
import { renderFooter } from "./components/footer.js";

// render elements onload
$(document).ready(()=>{
    const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    
    renderNav();
    renderHero();
    renderAbout();
    renderProjects();
    renderContact();
    renderFooter();

    // observe newly added fade-in elements
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});




