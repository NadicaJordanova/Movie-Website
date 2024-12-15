async function getShows(searchKeyWord) {
  if (searchKeyWord == "" || searchKeyWord == undefined) {
    var res = await fetch("http://api.tvmaze.com/shows");
    var data = await res.json();
    return data;
  } else {
    const res = await fetch(
      `http://api.tvmaze.com/search/shows?q=${searchKeyWord}`
    );
    const data = await res.json();
    const mappedShows = data.map((x) => x.show);
    return mappedShows;
  }
}

const showContainer = document.getElementById("shows");

//initial load
getShows().then((shows) => {
  populateShows(shows);
});


function populateShows(shows) {
  showContainer.innerHTML = "";
  var noResultContainer = document.getElementById("no-result");

  if (shows.length == 0) {
    noResultContainer.innerHTML = `
    <img src="https://icons.veryicon.com/png/o/commerce-shopping/jkd_wap/no-result.png"/>
    <h1>NO RESULTS</h1>
    <p>Please change your search keyword</p>
    `;
    console.log("noresults");
  } else {
    noResultContainer.innerHTML = "";
    shows.forEach((show) => {

const showDivElement= document.createElement("div")
showDivElement.classList.add("show")   //dodava klasa
showDivElement.innerHTML +=`

 <span><i class="fa fa-bookmark"></i></span>
        <img src="${show.image.medium}" id="poster"/>
       
        <div class="info">
        <h2>${show.name}</h2>
        <p><span><i class="fa fa-star" style="color: gold"></i> ${show.rating.average}</p>
        <div class="genres">
         ${show.genres
           .map((genre) => `<span class="genre">${genre}</span>`)
           .join("")}
         </div>
         <div class="links">
         <a id="learn-more" href="https://www.imdb.com/title/${
           show.externals.imdb
         }" target="_blank">Learn More</a>
         </div>
        </div>
        `
        

        showContainer.appendChild(showDivElement)


        showDivElement.addEventListener("click", () => {
  
          window.location.href = `show.html?id=${show.id}`
        });
      // showContainer.innerHTML += `
      //   <div class="show">
      //   <img src="./images/bookmark.svg"/ id="bookmark"> 
      //   <img src="${show.image.medium}" id="poster"/>

      //   <div class="info">
      //   <h2>${show.name}</h2>
      //   <p>Star ${show.rating.average}</p>
      //   <div class="genres">
      //    ${show.genres
      //      .map((genre) => `<span class="genre">${genre}</span>`)
      //      .join("")}
      //    </div>
      //    <div class="links">
      //    <a href="https://www.imdb.com/title/${
      //      show.externals.imdb
      //    }" target="_blank">Learn More</a>
      //    </div>
      //   </div>
      //   </div>
          
      //   `;
    });
  }
}

// getShows().then((data) => {
//     data.forEach((show) => {
//         showContainer.innerHTML += `
//         <div class="show">
//         <div class="images">
//         <img src="${show.image.medium}" id="poster"/>
//         </div>
//         <div class="info">
//         <h2>${show.name}</h2>
//         <p>Star ${show.rating.average}</p>
//         <div class="genres">
//          ${show.genres.map(genre => `<span class="genre">${genre}</span>`).join("")}
//          </div>
//          <div class="links">
//          <a href="https://www.imdb.com/title/${show.externals.imdb}" target="_blank">Learn More</a>
//          </div>
//         </div>
//         </div>

//         `
//     });
// })

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  getShows(searchInput.value).then((shows) => {
    populateShows(shows);
  });
});



// klikk na show nosi na nov page i go zima idto na toa show i pravi detch za site ep na toa show i gi prikazuva vo html so styling

const logInBtn = document.getElementById("log-in")
const signInBtn = document.getElementById("sign-in")

signInBtn.addEventListener("click", () =>
{
  window.location.href = `signin.html`
})

logInBtn.addEventListener("click", () =>
  {
    window.location.href = `login.html`
  })