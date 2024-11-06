// Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggleSwitch = document.querySelector("#toggle");
const bodyEl = document.querySelector("body");
const root = document.documentElement;
let mode = localStorage.getItem("mode") || "light";
bodyEl.classList.add(mode);
if (mode === "dark") {
  toggleSwitch.checked = true;
}
toggleSwitch.addEventListener("click", function () {

  if (mode === "light") {
    mode = "dark";
    bodyEl.classList.replace("light", "dark");
    root.style.setProperty("--circle-color", "#aaa");
    getComputedStyle(root).getPropertyValue("--circle-color");
  } else {
    mode = "light";
    bodyEl.classList.replace("dark", "light");
    root.style.setProperty("--circle-color", "#FFB100");
  }
  localStorage.setItem("mode", mode);
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));
  if (blogPosts) {
    return blogPosts;
  } else {
    return [];
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newPost) {
  const blogPosts = readLocalStorage();
  blogPosts.push(newPost);
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = "";

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

