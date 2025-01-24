// website start
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    // Use classList for toggling the "responsive" class
    menuBtn.classList.toggle("responsive");
}


// form submitted
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form); // Collect form data

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        form.reset(); // Optionally reset the form
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  }

// dark mode

const body = document.querySelector('body');
const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});


/* Typing Effect */
var typingEffect = new Typed(".typedText",{
    strings: ["Web Developers","Mern Developers","Coders","Designer","Data Analyst","React Native Developers"],

    loop: true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay :2000,
})

// scroll animation

const sr = ScrollReveal({
    origin: "top",
    distance : "80px",
    duration : 2000,
    reset :true,
});

sr.reveal(".featured-name", {delay:100});
sr.reveal(".text-info", {delay:200});
sr.reveal(".text-btn", {delay:200});
sr.reveal(".socical_icons", {delay:200});
sr.reveal(".featured-image", {delay:320});

sr.reveal(".project-box", {interval : 200});

sr.reveal(".top-header",{});

const srLeft = ScrollReveal({
    origin: "left",
    distance : "80px",
    duration : 2000,
    reset :true,
})

srLeft.reveal('.about-info', {delay:100});
srLeft.reveal('.contact-info', {delay:100});

const srRight = ScrollReveal({
    origin: "left",
    distance : "80px",
    duration : 2000,
    reset :true,
})

srRight.reveal('.skill', {delay:100});
srRight.reveal('.skill-box', {delay:100});


// active link

// const sections = document.querySelectorAll(".section[id]");

// function scrollActive(){
//     const scrollY = window.scrollY;

//     sections.forEach((current)=>{
//         const sectionHeight = current.offsetHeight,

//         sectionTop = current.offsetTop - 50,
//         sectionId = current.getAttribute("id");

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector(".nav-menu a[href='" + sectionId + "']")
//                 .classList.add("active-link");
//         }
//         else{
//             document.querySelector(".nav-menu a[href='" + sectionId + "']")
//             .classList.remove("active-link"); 
//         }
//     });
// }



const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        // Construct the selector string
        const linkSelector = `.nav-menu a[href="#${sectionId}"]`;
        const linkElement = document.querySelector(linkSelector);

        if (linkElement) { // Check if the element exists before accessing classList
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                linkElement.classList.add("active-link");
            } else {
                linkElement.classList.remove("active-link");
            }
        }
    });
}

// Add an event listener for scroll
window.addEventListener("scroll", scrollActive);
