window.onscroll = function() {
    var menu = document.getElementById("menu");
    if (window.pageYOffset > 100) {
        menu.classList.add("fixed");
    }else {
        menu.classList.remove("fixed");
    }
};


var projects = [
    { title: "Proje 1", descripyion: "Web Tasarımı Projesı", image: "#"},
    { title: "Proje 1", descripyion: "Veri Tabanı Projesı", image: "#"}
];

function displayProjects(){
    var projectContainer = document.getElementById("project-container");
    projects.forEach(function(project){
        var card = `
            <div class="card">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    </div>
                </div>`;
                projectContainer.innerHTML += card;
    });
}
displayProjects();