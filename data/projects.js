import { AjaxError, CallAjax } from "../library/ajax.js";
import { ConvertToTitle } from "../library/lib.js";
import config from "../config.js";

export function ProjectsData(){
  GetProjects();

  return [
    {
      title: "To-Do List",
      id: "to-do",
      desc: "A To-Do list that uses the localStorage API to store items to be completed. Items can be filtered by time-frames (today, week, month, all).",
      learned: "Node.js, scripting, localStorage API, modular design, webpack",
      repo: "https://github.com/Jonathan-C-L/to-do-list"
    },
    {
      title: "Othello",
      id: "othello",
      desc: "Using PHP to perform server-side game logic processing for the classic board game Othello.",
      learned: "PHP, data cleaning, server-side validation, client-server communication",
      repo: "https://github.com/Jonathan-C-L/othello"
    },
    {
      title: "Demonstrations",
      id: "demos",
      desc: "Previous programming projects from school that display my programming style and document my progression as a developer.",
      learned: "OOP, REST APIs, Full-Stack web dev, .NET Framework, Embedded Systems, memory management, data structures, sorting algorithms",
      repo: "https://github.com/Jonathan-C-L/demonstrations"
    }
  ];
}

function GetProjects(){
  fetch('https://api.github.com/users/Jonathan-C-L/repos', {
    headers: {
      'Authorization': `Bearer ${config.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
    .then(response => response.json())
    .then(data => ProcessData(data))
    .catch(err => console.error(err));
}

function ProcessData(rawData){
  console.log(rawData);

  rawData.forEach(project => {
    if(project["fork"] == true) // if forked, not my project
        return;

    console.log(ConvertToTitle(project["name"]));
    console.log(project["description"]);

  });
}