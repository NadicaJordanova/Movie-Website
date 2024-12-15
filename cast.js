
const id = new URLSearchParams(window.location.search).get("id");
const showName = new URLSearchParams(window.location.search).get("name");``

document.getElementById("cast-title").innerHTML += ` ${showName}`

console.log(showName)
// id tuka u zagrada moze da se izostave
async function getCast(id) {
    const response = await fetch(`https://api.tvmaze.com/shows/${id}/cast`);
    const cast = await response.json();
    return cast;
  }

  getCast(id).then((cast) =>{
    populateCast(cast)
  })
 


  function populateCast(cast){
    const castContainer = document.getElementById("cast")
    cast.forEach(actor => {
    const castDiv = document.createElement("div")
    castDiv.classList.add("cast-item")
    castDiv.innerHTML = `
    <div class="person">
    <h3>${actor.person.name}</h3>
    <img src="${actor.person.image.medium}" alt="">
    <p>Gender: ${actor.person.gender}</p>
   <p>${actor.person.country.name}</p>
</div>
<div class="character">
    <h3>${actor.character.name}</h3>
    <img src="${actor.character.image.medium}" alt="">
</div>
    `

       castContainer.appendChild(castDiv) 
        
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