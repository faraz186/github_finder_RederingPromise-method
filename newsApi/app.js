var getData = document.getElementById("showData");
var input = document.getElementById("searchInput");
var apikey = "*********************************";

const getNews = () => {
  getData.innerHTML = `<div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
  fetch(
    `https://newsapi.org/v2/everything?q=${
      input.value || "entertainment"
    }&from=2024-02-27&sortBy=publishedAt&apiKey=${apikey}`
  )
    .then((res) => res.json())
    .then((res) => {
      getData.innerHTML = "";
      for (var i = 0; i < res.articles.length; i++) {
        getData.innerHTML += `
      <div class="card" style="width:20rem;">
  <img src="${res.articles[i].urlToImage}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${res.articles[i].title}</h5>
    <h6 class=""card-title>${res.articles[i].publishedAt}</h6>
    <p class="card-text">${res.articles[i].description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>
  `;
      }
    })
    .catch((err) => console.log(err));
};

getNews();
