/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// Define Elements
const sections = document.querySelectorAll("section");
const ul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

// Define Intersection Observer API  for make the section active in the viewport
const options = {
    threshold: 0.5
};


const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            (entry.isIntersecting) ? entry.target.classList.add("your-active-class") : entry.target.classList.remove("your-active-class")
        })
    }, options);


/**
 * End Global Variables
 * Start Helper Functions
 * 
 * list items creatror + event listner for click & scroll into section
*/
function liCreator(section) {
    let li = document.createElement("li");
    li.innerText = section.dataset.nav;
    li.classList.add("menu__link")
    li.addEventListener("click", () => {
        section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    })
    return li;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (section of sections) {
    let li = liCreator(section);
    fragment.appendChild(li);

}



ul.append(fragment)

// ul event listner to make the clicked li active by adding 'li-active' & removing from others
ul.addEventListener("click", (ev) => {
    ul.childNodes.forEach((li) => {
        li.classList.remove("li-active")
    })
    ev.target.classList.add("li-active")
})


// Add class 'active' to section when near top of viewport

// Set scroll-margin style proberty to section elements because the fixed header made part of the section unvisible

sections.forEach((section) => {
    section.style.scrollMargin = ul.offsetHeight + "px"
})

window.addEventListener("load", (event) => {
    sections.forEach((section) => {
        observer.observe(section)
    })
  }, false);

// Scroll to anchor ID using scrollTO event

function scroll (element) {
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
