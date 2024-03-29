const getInput = () => {     
  var input = document.getElementById("searchInput").value;            

  var correctUsername = input.split(" ").join("");
  var data = "";   
  axios     
    .get("https://api.github.com/users/" + correctUsername)    
    .then((res) => {   
      data = res.data;    
        
      document.getElementById("result").innerHTML = `    
      <div class="card" style="width: 13rem;">            
  <img src="${data.avatar_url}" class="card-img-top" alt="...">
  <div class="card-body">   
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">${data.bio}</p>
    <a href="#" class="btn btn-primary">${data.html_url}</a>
  </div>
</div>
      `;
    })
    .catch((err) => {
      console.log(err);
    });
};
