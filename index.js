/**
 * Summary: index.js is the main entry point for the rest of the js files and will render the client-side elements
 * Author: Jonathan Le
 * Date: Dec. 18, 2025
 */
import { renderAbout, renderProjects, renderContact } from "./components/main.js";

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




