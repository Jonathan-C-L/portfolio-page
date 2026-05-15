import { AboutMe } from '../../../shared/types';

//------------------------------------------------------
// Placeholder Data - replace with DB queries when ready
//------------------------------------------------------
const skillItems: Record<string, string[]> = {
  "Languages":   ["HTML", "CSS", "JavaScript", "C", "PHP", "C#", "Python"],
  "Databases":   ["MySQL", "SQL Server"],
  "Frameworks":  ["jQuery", "ASP.NET ADO", "ASP.NET Entity"],
  "Tooling":     ["Git", "GitHub", "VSCode", "Azure"]
}

export const about: AboutMe = {
  name: "Jonathan Le",
  bio: `I am a Computer Engineering Technology (CNT) graduate from the Northern Alberta Institute of Technology (NAIT). I have approxmiately 2 years of programming experience, with proficiencies in full-stack application development and embedded systems. My primary interest is in data, as I find it genuinely engaging and fulfilling to solve problems related to obtaining, transforming, transmitting, and storing data in an efficient and scalable manner.`,
  description: `"We are what we repeatedly do. Exellence, then, is not an act, but a habit" -Will Durant`,
  skills: skillItems
}