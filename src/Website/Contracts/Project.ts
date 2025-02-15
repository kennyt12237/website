interface Project {
    title: string,
    texts: Array<string>,
    mediaSrc: string,
}

const projects: Array<Project> = [
    {
        title: "TATWorks",
        texts: [
            "A redesigned web application for TatWorks utilising modern software tools",
            "Full functionality implemented of the application requirements",
            "Modularised code for reusability and maintainability of similar components",
        ],
        mediaSrc: process.env.PUBLIC_URL + "/projectImg/tatworks_landing_page.png",
    },
    {
        title: "Are We There Yet",
        texts: [
            "An ambitious itinerary trip planner with visualisation at destinations",
            "Development using modern web development tools; the MERN stack and external APIs.",
            "Successfully handled and extracted data from external API that linked with multiple components.",
        ],
        mediaSrc: process.env.PUBLIC_URL + "/projectImg/awty-map.png",
    },
    {
        title: "Mello",
        texts: [
            "A task management web application catering for students",
            "Integration of Spotify API with a Pomodoro Technique Timer mechanism",
            "Sofware development using modern web development tools and frameworks.",
        ],
        mediaSrc: process.env.PUBLIC_URL + "/projectImg/mello_homepage.png",
    },
];

export { projects };
