
document.addEventListener('keydown', function(event) {
        // Navigate to the homepage with Alt + H
        if (event.altKey && event.key === 'h') {
            window.location.href = '/index.html';
        }
        if (event.altKey && event.key === 'u') {
            window.location.href = '/uniProjects.html';
        }
        if (event.altKey && event.key === 'o') {
            window.location.href = '/ownProjects.html';
        }
        if (event.altKey && event.key === 's') {
            window.location.href = '/selfStudyProjects.html';
        }
        if (event.altKey && event.key === 'a') {
            window.location.href = '/aboutMe.html';
        }
        if (event.altKey && event.key ==='l'){
            window.location.href = '/oats.html';//hidden site for oats to see
        }
        if (event.altKey && event.key ==='b'){
            window.history.back();
        }
         //More hotkeys to be added
    });
