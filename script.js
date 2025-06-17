alert("HII \n Welcome To Image Search Engine")

const accessKey = "RnTJ9QL8h1JN07i60N-WL-sFDf4K-_Y4HwASC4R6GSo";
const searchform = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
      searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((result) => {
      const image = document.createElement("img");
      image.src = result.urls.small;
      searchResult.appendChild(image);
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";

      imageLink.appendChild(image);
      searchResult.appendChild(imageLink);
    });
    console.log(data);
    showMoreBtn.style.display = "block";
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }
}
function toggleMobileMenu() {
      const menu = document.getElementById('mobileHeader1');
      const overlay = document.getElementById('overlay');
      menu.classList.toggle('show');
      overlay.classList.toggle('show');
    }


searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});

