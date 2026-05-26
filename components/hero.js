/**
 * Author: Jonathan Le
 * Date: May 25, 2026
 * Summary: hero.js is responsible for rendering the hero section of the page, which includes a brief introduction and call-to-action
 */

import { showSection } from "./nav.js";
import { AppendAll } from "../library/lib.js";

const HERO_OPEN_TO_OPPORTUNITIES = true;

export function renderHero(){
    const heroSection = document.getElementById("hero");
    AppendAll(heroSection, [heroCTAs(), heroBadge(HERO_OPEN_TO_OPPORTUNITIES)]);
}

function heroCTAs(){
    const ctaContainer = document.createElement("div");
    ctaContainer.className = "hero-ctas fade-in";

    const viewProjectsBtn = document.createElement("button");
    viewProjectsBtn.className = "btn btn-primary";
    viewProjectsBtn.textContent = "View Projects";
    viewProjectsBtn.onclick = () => showSection("projects");

    const getInTouchBtn = document.createElement("button");
    getInTouchBtn.className = "btn btn-ghost";
    getInTouchBtn.textContent = "Get in Touch";
    getInTouchBtn.onclick = () => showSection("contact");
    AppendAll(ctaContainer, [viewProjectsBtn, getInTouchBtn]);
    return ctaContainer;
}
function heroBadge(open = true){
    if (!open) 
        return null;

    const badge = document.createElement("div");
    badge.className = "hero-badge";
    badge.innerHTML = `
        <div class="dot"></div>
        Open to opportunities
    `;
    return badge;
}