import { Project } from '../../../shared/types';

//------------------------------------------------------
// Placeholder Data - replace with DB queries when ready
//------------------------------------------------------
const todo: Project = {
  _id: "to-do",
  title: "To-Do List",
  description: "A To-Do list that uses the localStorage API to store items to be completed. Items can be filtered by time-frames (today, week, month, all).",
  learned: "Node.js, scripting, localStorage API, modular design, webpack",
  src: "https://raw.githubusercontent.com/Jonathan-C-L/to-do-list/HEAD/preview.jpg",
  repo: "https://github.com/Jonathan-C-L/to-do-list"
}
const othello: Project = {
  _id: "othello",
  title: "Othello",
  description: "Using PHP to perform server-side game logic processing for the classic board game Othello.",
  learned: "PHP, data cleaning, server-side validation, client-server communication",
  src: "https://raw.githubusercontent.com/Jonathan-C-L/othello/HEAD/preview.jpg",
  repo: "https://github.com/Jonathan-C-L/othello"
}
const demos: Project = {
  _id: "demos",
  title: "Demonstrations",
  description: "Previous programming projects from school that display my programming style and document my progression as a developer.",
  learned: "OOP, REST APIs, Full-Stack web dev, .NET Framework, Embedded Systems, memory management, data structures, sorting algorithms",
  src: "https://raw.githubusercontent.com/Jonathan-C-L/demonstrations/HEAD/preview.jpg",
  repo: "https://github.com/Jonathan-C-L/demonstrations"
}

export const projects: Project[] = [todo, othello, demos];





