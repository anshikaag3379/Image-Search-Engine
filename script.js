const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResults=document.getElementById("search-result");
const showMore=documnet.getElementById("show-more-btn")

let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url= `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&client_id=yDDA7cvE3R07LwvSmSTiVmOigWVJs4Lj4GnFVnatNKg`;
    const response=await fetch(url);
    const data= await response.json();
    const results=data.results;
    results.map((result)=>{
        const img=document.createElement("img");
        img.src=result.urls.small;
        searchResults.appendChild(img);
    }
}

searchForm.addEventListener("submit"), (e)=>{
    e.preventDefault();
    page=1;
    searchImages();

}