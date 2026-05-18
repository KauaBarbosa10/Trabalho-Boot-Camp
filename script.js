
function scrollProjects(direction){
    const slider = document.getElementById('projectsSlider');
    slider.scrollBy({
        left: direction * 380,
        behavior: 'smooth'
    });
}
