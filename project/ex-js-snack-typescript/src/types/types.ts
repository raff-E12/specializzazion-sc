
// Types of Object 

type Dipendente = {
    firstName: string,
    lastName: string,
    Birdth: number,
    Gender: "M" | "F",
    Services: number[],
    readonly Email: string,
    Contract: "permanent" | "fixed-term" | "freelance"
}

type Developer = Dipendente & {
    ExperienceLevel: "Junior" | "Mid" | "Senior",
    ProgrammingLanguages?: string[],
    certifications: string[]
}

type ProjectManager = Dipendente & {
    teamSize: number | null,
    Budget?: number,
    Mainstakeholders: string[]
}

type Team = {
    name: string,
    projectName: string | null,
    Budget: number,
    Members: [ProjectManager, Developer, ...Developer[]]
}

export {
    Dipendente,
    Developer,
    ProjectManager,
    Team
}