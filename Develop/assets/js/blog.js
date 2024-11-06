// Create a variable that selects the main element, and a variable that selects the back button element

const mainEl = document.querySelector("main");
const backBtn = document.querySelector("#back");
const blogContainer = document.querySelector("#blogContainer");

// Create a function that builds an element and appends it to the DOM
function buildElement(tag, parent, textContent = "", className = "") {

    const element = document.createElement(tag);

    if (textContent) {
        element.textContent = textContent;
    }
    if (className) {
        element.classList.add(className);
    }
    parent.appendChild(element);
    return element;
}




// Create a function that handles the case where there are no blog posts to display
function noPosts() {
    mainEl.innerHTML = 'No Blog posts yet...';
}

// Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts"));

    if (blogPosts) {
        blogContainer.innerHTML = "";
        blogPosts.forEach(post => {
            const article = buildElement("article", blogContainer);
            buildElement("h2", article, post.title);
            buildElement("blockquote", article, post.content);
            buildElement("p", article, `Posted by: ${post.username}`);
        })
    } else {
        noPosts();
    }
}


// Call the `renderBlogList` function
renderBlogList();

// Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backBtn.addEventListener("click", function () {
    redirectPage("index.html");
});
