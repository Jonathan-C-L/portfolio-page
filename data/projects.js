import { ConvertToTitle, TitleCase } from "../library/lib.js";

export async function ProjectsData(){
  const returnData = await fetch('https://api.github.com/users/Jonathan-C-L/repos', {
    headers: {
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
      learned: TitleCase(project["topics"]).join(", "),
      repo: project["html_url"]
    }
    
    // Add to return array at the end of parsing
    processedData.push(parsedProject);
  });

  return processedData;
}