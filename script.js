const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResults=document.getElementById("search-result");
const showMore=document.getElementById("show-more-btn")

let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url= `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&client_id=yDDA7cvE3R07LwvSmSTiVmOigWVJs4Lj4GnFVnatNKg&per_page=12`;

    const response= await fetch(url);
    const data= await response.json();

    const results= data.results;

    results.map((result)=>{
        const image= document.createElement("img");
        image.src=result.urls.small;
        const imageLink= document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
    })
    }


searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImages();

})