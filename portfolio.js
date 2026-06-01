const myProjects = [
    {
        title: "Devschool Landing Page",
        category: "html-css",
        image: "landingpage.jpg",
        description: "A sleek, minimalist educational landing page built using utility-first styling with Tailwind CSS.",
        liveLink: "https://esther-kentomahun.github.io/Esther_Kent_Assesment/",
        repoLink: "https://github.com/Womenindefi-org/WID-Web2-C3-Test.git"
    },
    {
        title: "TO-DO LIST",
        category: "javascript",
        image: "todolist.jpg",
        description: "A functional task management application featuring input validation.",
        liveLink: "https://wid-to-do-list.vercel.app/",
        repoLink: "https://github.com/esther-kentomahun/WID-TO-DO-LIST.git"  
    },
    {
        title: "Bill Calculator",
        category: "javascript",
        image: "billCalculator.jpg",
        description: "A dynamic calculation tool that processes total bills, custom tip percentages and splits the final costs evenly among multiple users.",
        liveLink: "https://esther-kentomahun.github.io/bill_calculator_app/",
        repoLink: "https://github.com/esther-kentomahun/bill_calculator_app.git"
    },
    {
        title: "Personal Bio Page",
        category: "html-css",
        image: "profilepic.jpg",
        description: "A clean, typography-focused personal biography page built with semantic HTML5 to establish an elegant structural layout and web hosting foundation.",
        liveLink: "https://esther-kentomahun.github.io/wid_dev/",
        repoLink: "https://github.com/esther-kentomahun/wid_dev.git",
    } 
]
const searchInput = document.getElementById("searchInput");
const projectsContainer = document.getElementById("projectsContainer");
const errorMSG = document.getElementById("errorMSG");
const allBtn = document.getElementById("allBtn");
const htmlBtn = document.getElementById("htmlBtn");
const jsBtn = document.getElementById("jsBtn");

function displayProjects(projectList) {
    projectsContainer.innerHTML = "";
    if (projectList.length === 0) {
        errorMSG.textContent = "No projects match your search.";
    } else {
      errorMSG.textContent = "";
        projectList.forEach((project) => {
          const cardHTML = `
          <div class="bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm overflow-hidden">
          <div class="w-full h-48 bg-slate-50 rounded-lg overflow-hidden border border-slate-100 mb-2">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"></div>
          <span class="text-xs font-semibold uppercase text-slate-400">${project.category}</span>
          <h3 class="text-xl font-bold text-slate-900">${project.title}</h3>
          <p class="text-slate-600 text-sm">${project.description}</p>
          <div class="pt-2 flex gap-4 text-sm font-medium">
          <a href="${project.liveLink}" target="_blank" class="text-slate-900 hover:underline">Live Demo</a>
          <a href="${project.repoLink}" target="_blank" class="text-slate-500 hover:underline">View Code</a>
          </div>
          </div>
          `;
          projectsContainer.innerHTML += cardHTML;
        });
    }
}
displayProjects(myProjects);
searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProjects = myProjects.filter((project) => {
        return project.title.toLowerCase().includes(searchTerm);
    });
    displayProjects(filteredProjects);
});
// Button clicking
// HTML/CSS Button
htmlBtn.addEventListener("click", () => {
    const filtered = myProjects.filter((project) => project.category === "html-css");
    displayProjects(filtered);
});
// JavaScript Button
jsBtn.addEventListener("click", () => {
    const filtered = myProjects.filter((project) => project.category === "javascript");
    displayProjects(filtered);
});
// All Button
allBtn.addEventListener("click", () => {
    displayProjects(myProjects);
});