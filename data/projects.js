import { AjaxError, CallAjax } from "../library/ajax.js";
import { ConvertToTitle } from "../library/lib.js";
import config from "../config.js";

// export async function ProjectsData(){
//   return await GetProjects()

//   return [
//     {
//       title: "To-Do List",
//       id: "to-do",
//       desc: "A To-Do list that uses the localStorage API to store items to be completed. Items can be filtered by time-frames (today, week, month, all).",
//       learned: "Node.js, scripting, localStorage API, modular design, webpack",
//       repo: "https://github.com/Jonathan-C-L/to-do-list"
//     },
//     {
//       title: "Othello",
//       id: "othello",
//       desc: "Using PHP to perform server-side game logic processing for the classic board game Othello.",
//       learned: "PHP, data cleaning, server-side validation, client-server communication",
//       repo: "https://github.com/Jonathan-C-L/othello"
//     },
//     {
//       title: "Demonstrations",
//       id: "demos",
//       desc: "Previous programming projects from school that display my programming style and document my progression as a developer.",
//       learned: "OOP, REST APIs, Full-Stack web dev, .NET Framework, Embedded Systems, memory management, data structures, sorting algorithms",
//       repo: "https://github.com/Jonathan-C-L/demonstrations"
//     }
//   ];
// }

export async function ProjectsData(){
  const returnData = await fetch('https://api.github.com/users/Jonathan-C-L/repos', {
    headers: {
      'Authorization': `Bearer ${config.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
    .then(response => response.json())
    .then(data => ProcessData(data))
    .catch(err => console.error(err));

  return returnData;
}

function ProcessData(rawData){
  let processedData = [];

  rawData.forEach(project => {
    // If forked, not my project
    if(project["fork"] == true) 
        return;

    // Shaping incoming data from GitHub into an object
    const parsedProject = {
      title: ConvertToTitle(project["name"]),
      id: project["name"],
      desc: project["description"],
      learned: project["topics"].map(topic => topic.toUpperCase()).join(", "),
      repo: project["html_url"]
    }
    
    // Add to return array at the end of parsing
    processedData.push(parsedProject);
  });

  return processedData;
}