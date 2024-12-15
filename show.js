const id = new URLSearchParams(window.location.search).get("id");

async function getShowData(id) {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await response.json();
  return show;
}

async function getEpisodesForShow(id) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}/episodes`);
  const episodes = await res.json();
  return episodes;
}

getEpisodesForShow(id).then((episodes) => {
  populateSeasonFilters(episodes)
  populateEpisodes(episodes);
});

getShowData(id).then((show) => {
  populateShow(show);
});

function populateShow(show) {
  const showContainer = document.getElementById("show");
  const showTitle = document.getElementById("show-title");
  showTitle.innerText = show.name;

  const showDivElement = document.createElement("div");
  showDivElement.classList.add("show");
  showDivElement.innerHTML = `
  <div class="left-side">
  <img src="${show.image.original}"/>
  </div>
   <div class="right-side">
   <div class="genres">
  ${show.genres.map((genre) => `<span class="genre">${genre}</span>`).join("")}
  </div>
  <div class="description">
   <p>${show.summary}</p>
   </div>
   <div class="info">
   <p id="premiered">Premiered: ${show.premiered}</p>
   <p>Ended: ${show.ended}</p>
   <p> <span><i class="fa fa-star" style="color: gold"></i> ${show.rating.average}</p>
   <a href="cast.html?id=${show.id}&name=${show.name}">View Cast</a>
    <a href="${show.officialSite}" target="_blank">Official Site</a>
   </div>
   </div>
  `;

  showContainer.appendChild(showDivElement);
}

var selectedIndex = 0;

function populateSeasonFilters(episodes) {
  const numberOfSeasons = episodes[episodes.length - 1].season;
  console.log(numberOfSeasons);
  const seasonsArray = Array(numberOfSeasons)
    .fill()
    .map((_, index) => index + 1);


  const filterSeasonsContainer = document.getElementById("filter-seasons");


  seasonsArray.forEach((season, index) => {
    const seasonButton = document.createElement("div");
    seasonButton.classList.add("season-btn");
    seasonButton.innerHTML = `Season ${season}`;


    seasonButton.addEventListener("click", () => {
      const filteredEpisodes = episodes.filter(
        (episode) => episode.season == season
      );
      populateEpisodes(filteredEpisodes);
    });
    filterSeasonsContainer.appendChild(seasonButton);


  const allSeasonButtons = Array.from(
    document.getElementsByClassName("season-btn")
  );
  console.log(allSeasonButtons);

  });}




function populateEpisodes(episodes) {
  const episodeContainer = document.getElementById("episodes");
  episodeContainer.innerHTML = `<h1>Episodes : ${episodes.length}</h1>`;
  episodes.forEach((episode) => {
    const episodeDivElement = document.createElement("div");
    episodeDivElement.classList.add("episode");
    episodeDivElement.innerHTML = `
    
   <div class="episode-img">
   <img src ="${episode.image.medium}"/>
   </div>
   <div class="episode-data">
   <div class="episode-title-div">
   <h3>${episode.name}</h3>
   <span>${episode.airdate}</span>
   </div>
   <p>${episode.summary}</p>
   <div class="episode-rate">
      <span><i class="fa fa-star" style="color: gold"></i>
      ${episode.rating.average}
      </span>
      <button><i class="fa fa-star" style="color: blue"></i>Rate</button>
   </div>
   </div>
   
   `;
    episodeContainer.appendChild(episodeDivElement);
  });
}
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


// cast.html?id=${show.id}&?name=${show.name}