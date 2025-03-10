function createProjectSection(data) {
    let sectionHTML = '';

    if (data.title) {
        sectionHTML += `<h1>${data.title}</h1>`;
    }
    if (data.subtitle) {
        sectionHTML += `<p class="input-space">${data.subtitle}</p>`;
    }

    if (data.nonClickable) {
        sectionHTML += `<div class="project non-clickable">`;
    } else {
        sectionHTML += `<div class="project" onclick="window.location.href='${data.link}';">`;
    }

    sectionHTML += `<div class="project-text"><p>${data.description}</p></div>`;

    if (data.video) {
        sectionHTML += `<div class="project-img">
            <video autoplay loop muted playsinline>
                <source src="${data.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>`;
    } else {
        sectionHTML += `<div class="project-img"><p><img src="${data.images[0]}" alt="${data.subtitle}" /></p></div>`;
    }

    sectionHTML += `</div>`;
    return sectionHTML;
}

function renderProjects(projectData) {
    const container = document.querySelector('.scroll');
    if (container && projectData) {
        projectData.forEach(data => {
            container.innerHTML += createProjectSection(data);
        });
    }
}
