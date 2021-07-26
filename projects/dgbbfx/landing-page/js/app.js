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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//
const sectionsNum = document.getElementsByTagName("section");

for (let index = 1; index <= sectionsNum.length; index++) {
  const menuLink = document.createElement("a");
  menuLink.textContent = "section" + index;
  menuLink.className = "menu__link";
  menuLink.href = "#section" + index;

  const navList = document.getElementById("navbar__list");

  const navLink = document.createElement("li");
  navLink.className = "nav-item";
  //
  const listPlusLi = navList.appendChild(navLink);

  const navitem = navLink.appendChild(menuLink);
  //

  //
  // adding active styling on scroll for both header's nav and sections
  // attributed  https://nfpdiscussions.udacity.com/t/code-active-section/201506/3  i fully understand the code , the  " getBoundingClientRect(). " is what i needed help with before finding it
  window.addEventListener("scroll", function () {
    for (let i = 0; i < sectionsNum.length; i++) {
      if (
        sectionsNum[i].getBoundingClientRect().top > 0 &&
        sectionsNum[i].getBoundingClientRect().top < 600
      ) {
        sectionsNum[i].classList.add("your-active-class");
        const activeElements = sectionsNum[i].getAttribute("id");
        const links = document.getElementsByTagName("a");

        for (let i = 0; i < links.length; i++) {
          if (links[i].innerText === activeElements) {
            links[i].classList.add("active");
          } else {
            links[i].classList.remove("active");
          }
        }
      } else if (
        sectionsNum[i].classList.contains("your-active-class") === true
      ) {
        sectionsNum[i].classList.remove("your-active-class");
      }
    }
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
