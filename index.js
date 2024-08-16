<<<<<<< HEAD
// import "./styles.css";
// Part 1: Getting Started

// Step1 | Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector("main"); //document.querySeclctor('main') selects the first <main> element in the document and stores it in mainEl.

//Step2 | Apply background color
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = "var(--main-bg)"; //Sets the background color of mainEl to the value of the (--main-bg) property.

//Step3 | Add h1
// Sets the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = "<h1>DOM Manipulation</h1>"; // Sets the content of 'mainEl' to include <h1> element with the text 'DOM Manipulation'.

//Step4 | Add flex class list
// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr"); // Add the 'flex-ctr" class to mainEl.

//==============================================================================
//Part 2: Creating a Menu Bar

//Step 1 |name and assisgn a top menu var
//Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
//Uses document.getElementById('top-menu') to get a reference to the HTML element with the ID top-menu and store it in the topMenuEl variable.

//Step 2| Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
//set the height of the topMenuEl element to 100% using the style.height property.

//Step 3 | Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//using the style.backgroundColor property of topMenuEl.

//Step 4 | Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");
//set the flex-around class to the topMenuEl element using classList.add.

//Step 5 | Add Menu Buttons

// Old Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

// Updated data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Step 6 | Add the menulink to the navBar
//Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((link) => {
  const aEl = document.createElement("a"); // Create an <a> element.
  aEl.setAttribute("href", link.href); // On the new element, add an href attribute with its value set to the href property of the "link" object.
  aEl.textContent = link.text; // Set the new element's content to the value of the text property of the "link" object.
  topMenuEl.appendChild(aEl); // Append the new element to the topMenuEl element.
});

//==============================================================================================
// Part 3 - Adding interactivity
const subMenuE1 = document.getElementById("sub-menu");
subMenuE1.style.height = "100%";
subMenuE1.style.backgroundColor = "var(--sub-menu-bg)";
subMenuE1.setAttribute("class", "flex-around");

subMenuE1.style.position = "absolute";
subMenuE1.style.top = 0;

//Grabbing all topMenuE1 <a> elements
const topMenuLinks = document.querySelectorAll("a");

//Add EventListener
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (!e.target.matches("a")) {
    return;
  }
  console.log(e.target.textContent);
  // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it
  e.target.classList.toggle("active");
  topMenuLinks.forEach((link) => {
    if (link !== e.target) {
      link.classList.remove("active");
    }
    if (e.target === "about") {
      mainEl.innerHTML = `<h1>About</h1>`;
    }
  });

  //=======================================================================================
  //Part 5 | Adding Submenu Interaction

  // Within the event listener, if the clicked <a> element does not yet have a classs of "active"(it was inactive when clicked):
  // If the clicked <a> element's "link" object within menulinks has a sublinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuE1 to 100%.
  //Otherwise, set the CSS top property of subMenuE1 to 0.
  //Hint: Caching the "link" object will come in handy for passing its sublinks array later.
  let clickedLink = menuLinks.find(
    (link) => link.text === e.target.textContent
  );
  if (e.target.classList.contains("active") && clickedLink.subLinks) {
    subMenuE1.style.top = "100%";
    buildSubMenu(clickedLink.subLinks);
  } else {
    if (clickedLink.length === 0) {
      subMenuE1.style.top = 0;
    }
  }

  function buildSubMenu(subLinks) {
    //Clear the current contents of subMenuEl.
    subMenuE1.innerHTML = "";
    // Iterate over the subLinks array, passed as an argument, and for each "link" object:
    subLinks.forEach((link) => {
      // Create an <a> element.
      const a = document.createElement("a");
      // Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      a.setAttribute("href", link.href);
      // Set the element's content to the value of the text property of the "link" object.
      // Append the new element to the subMenuEl.
      a.textContent = link.text;
      subMenuE1.appendChild(a);
    });
  }
});

// Attach a delegated 'click' event listener to subMenuEl.
subMenuE1.addEventListener("click", function (e) {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault();
  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if (!e.target.matches("a")) {
    return;
  }
  // Log the content of the <a> to verify the handler is working.
  console.log(e.target.textContent);
  // Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuE1.style.top = "0";
  // Remove the active class from each <a> element in topMenuLinks.
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });
  // Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  console.log(mainEl);

  if (
    mainEl.innerHTML == "account" ||
    mainEl.innerHTML == "orders" ||
    mainEl.innerHTML == "catalog"
  ) {
    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
  } else {
    mainEl.innerHTML = `<h1>About</h1>`;
  }
});
