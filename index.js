// import "./styles.css";
// Part 1: Getting Started
// Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector("main"); //document.querySeclctor('main') selects the first <main> element in the document and stores it in mainEl.

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.

mainEl.style.backgroundColor = "var(--main-bg)"; //Sets the background color of mainEl to the value of the (--main-bg) property.

// Sets the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.

mainEl.innerHTML = "<h1>DOM Manipulation</h1>"; // Sets the content of 'mainEl' to include <h1> element with the text 'DOM Manipulation'.

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add("flex-ctr"); // Add the 'flex-ctr" class to mainEl.

//Part 2: Creating a Menu Bar

//Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

const topMenuEl = document.getElementById("top-menu");
//Uses document.getElementById('top-menu') to get a reference to the HTML element with the ID top-menu and store it in the topMenuEl variable.

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";
//set the height of the topMenuEl element to 100% using the style.height property.

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//using the style.backgroundColor property of topMenuEl.

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");
//add the flex-around class to the topMenuEl element using classList.add.

//Adding Menu Buttons

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
// Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach(link => {
  // Create an <a> element.
  const aEl = document.createElement("a");

  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  aEl.setAttribute("href", link.href);

  // Set the new element's content to the value of the text property of the "link" object.
  aEl.textContent = link.text;

  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(aEl);
});
