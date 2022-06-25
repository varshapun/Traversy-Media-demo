const toggleBtn = document.querySelector(".toggle-menu-btn")
const toggleMenu = document.querySelector(".toggle-menu")
var toggleCount = true;
toggleBtn.addEventListener("click", () => {
    if (toggleCount) {
        toggleMenu.classList.add("show");
        toggleBtn.classList.add("close");
        toggleCount=false;
    }
    else{
        toggleMenu.classList.remove("show");
        toggleBtn.classList.remove("close");
        toggleCount=true;
    }
});



const courselist = document.querySelectorAll(".course");
const courseCodes = document.querySelectorAll(".code");
const hideCourseBtn = document.querySelector(".btn-hide-course")



for (const course of courselist) {
    course.addEventListener("mouseover",function onClick(e)  {
        let counter = e.target.id;
            courseCodes[counter-1].style.opacity = "1";
    });
    course.addEventListener("mouseleave",function onClick(e)  {
        let counter = e.target.id;
        
        courseCodes[counter-1].style.opacity = "0";
    });
}

hideCourseBtn.addEventListener("click", () => {
    if (hideCourseBtn.innerText === "Show More") {
        for (let index = 6; index < 12; index++) {
            courselist[index].classList.add("show");
            courselist[index].classList.remove("hide");
            hideCourseBtn.innerText = "Hide Courses";
        } 
    }
    else{
        for (let index = 6; index < 12; index++) {
            courselist[index].classList.add("hide");
            courselist[index].classList.remove("show");
            hideCourseBtn.innerText = "Show More";
        } 
    }
    
});

// ebooks button

const getEbooksBtn = document.querySelector(".getIt");
getEbooksBtn.addEventListener("click",() => {
    window.open("https://traversy.gumroad.com/l/web-dev-guide", '_blank');
});

// visit channel
const visitChannelBtn = document.querySelector(".visit-channel");
visitChannelBtn.addEventListener("click",() => {
    window.open("https://www.youtube.com/traversymedia", '_blank');
});

// become-patron
const patronBtn = document.querySelector(".become-patron");
patronBtn.addEventListener("click",() => {
    window.open("https://www.patreon.com/traversymedia", '_blank');
});

// CLICKING ON BRANDING LOGO

const navbarBranding = document.querySelector(".navbar-branding");
navbarBranding.addEventListener("click",() => {
    location.href="#";
    
});

