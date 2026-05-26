/**
 * Author: Jonathan Le
 * Date: May 25, 2026
 * Summary: hero.js is responsible for rendering the hero section of the page, which includes a brief introduction and call-to-action
 */

import { showSection } from "./nav.js";
import { AppendAll } from "../library/lib.js";

const HERO_TAG = "Software Developer";
const HERO_FNAME = "Jonathan";
const HERO_LNAME = "Le";
const HERO_DESC = `"We are what we repeatedly do. Exellence, then, is not an act, but a habit" -Will Durant`;

export function renderHero(){
    const heroSection = document.getElementById("hero");
    AppendAll(heroSection, [heroTag(), heroName(), heroDescription(), heroCTAs()]);
}


function heroTag(){
    const heroTag = document.createElement("div");
    heroTag.className = "hero-tag fade-in";
    heroTag.textContent = HERO_TAG;
    return heroTag;
}
function heroName(){
    const heroName = document.createElement("h1");
    heroName.className = "hero-name fade-in crt";
    heroName.innerHTML = `${HERO_FNAME}<br><em>${HERO_LNAME}</em>`;
    return heroName;
}
function heroDescription(){
    const heroDesc = document.createElement("p");
    heroDesc.className = "hero-desc fade-in";
    heroDesc.innerHTML = `<i>${HERO_DESC}</i>`;
    return heroDesc;
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