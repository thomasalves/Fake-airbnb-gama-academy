
const app = document.getElementById('root');




const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);
request.onload = function () {


  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(aps => {


      const card = document.createElement('div');
      card.className = "card";

      const Image = document.createElement('img');
      Image.src = aps.photo;

      const h1 = document.createElement('div');
      h1.className ="name"
      h1.innerHTML = aps.name;

       const h2 = document.createElement('div');
       h2.className ="type"
       h2.innerHTML = `Tipo: ${aps.property_type}`;

       const h3 = document.createElement('div');
       h3.className ="price"
       h3.innerHTML = `Diaria: R$ ${aps.price.toFixed(2)}/Noite`;

      container.appendChild(card);

      card.appendChild(Image)
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);


    });
  }
}


request.send();
