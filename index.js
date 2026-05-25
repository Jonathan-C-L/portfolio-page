/**
 * Summary: index.js is the main entry point for the rest of the js files and will render the client-side elements
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
import { renderContact } from "./components/contact.js";
import { renderProjects } from "./components/projects.js";
import { renderAbout } from "./components/about.js";
import { renderNav } from "./components/nav.js";

console.log("index.js connected");
// global access variables
let main = null;
let header = null;
let footer = null;
let body = null;

// render elements onload
$(document).ready(()=>{
    // CallAjax("https://api.github.com/users/Jonathan-C-L/repos", "get", {}, "json", Test, AjaxError);

    const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.12 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
    
    renderNav();
    renderAbout();
    renderProjects();
    renderContact();

    // observe newly added fade-in elements
    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
});

// function Test(response){
//     console.log(response);
//     response.forEach(project => {
//         if(project["fork"] == true) // if forked, currently it's not my project
//             return;
//         // console.log(CapitalizeFirst(project["name"]));
//         console.log(project["description"]);

//     });
// }




