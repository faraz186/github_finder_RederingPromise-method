var table = document.getElementById("dataRow");

const fetchData = new Promise((resolve, reject) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())  
    .then((res) => resolve(res))
    .catch((err) => reject(err));
});

fetchData
  .then((res) => {
    // console.log(res);
    sendTohtml(res);
  })
  .catch((err) => console.log(err));

function sendTohtml(data) {
  var card = "";
  console.log(data);
  var getData = data.map((e, i) => {
    card += `<tr>
    <td>${e.id}</td>
    <td>${e.title}</td>
    <td>${e.price}</td>
    <td>${e.description}</td>
    <td><img src="${e.image}"/></td>

    </tr>`;

    table.innerHTML = card;
  });
}
