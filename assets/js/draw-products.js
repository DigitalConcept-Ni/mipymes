let sections = ['featured', 'fast', 'best', 'Trends'];

const getData = async (category) => {

  let isInteger = Number.isInteger(category);

  return await fetch("assets/json/products.json")
    .then(res => res.json())
    .then((res) => {
      var count = 0;
      var count0 = 0;
      var count1 = 0;
      var count2 = 0;
      var count3 = 0;

      // var fil = res.filter(res => res.category === 'featured')

      let filter = res.filter(function (res) {
        // return res.categoria === 'Perecedero';

        if (category === 'all'){

          if(res.section === sections[0]){
            count0 += 1;
            if (count0 <= 5){
              return res.section === sections[0];
            }
          }

          if(res.section === sections[1]){
            count1 += 1;
            if (count1 <= 5){
              return res.section === sections[1];
            }
          }

          if(res.section === sections[2]){
            count2 += 1;
            if (count2 <= 5){
              return res.section === sections[2];
            }
          }

          if(res.section === sections[3]){
            count3 += 1;
            console.log(count3)
            if (count3 <= 5){
              return res.section === sections[3];
            }
          }
          
        }else if (isInteger) {
          return res.id === category;
        } else{
          if (res.section === category) {
            count += 1;
            if (count <= 5){
              return res.section === category;
            }
          }
        }
      });
      return filter;
    });
};

const drawProduct = async (category) => {
  var data = await getData(category);
  var container0 = document.getElementById(sections[0]);
  var container1 = document.getElementById(sections[1]);
  var container2 = document.getElementById(sections[2]);
  var container3 = document.getElementById(sections[3]);
  let cards0 = '';
  let cards1 = '';
  let cards2 = '';
  let cards3 = '';
  let cards = '';

  // items q  ue no van
  // 56, 63, 45, 50

  data.forEach(e => {
    cards += `<div class="product-card">
    <div class="box-img">
      <figure>
        <img src="assets/img/products/${e.img_name}.png" alt="">
      </figure>
    </div>
    <div class="info-product">
      <span class="price">
        C$ ${e.price}
      </span>
      <p class="description">
        ${e.description}
      </p>
      <button class="btn-add" onclick="insertProduct(this)" data-item='${e.id}'>+ Add</button>

    </div>
  </div>`;
    if(e.section === sections[0]){
      cards0 += cards;
    }
    if(e.section === sections[1]){
      cards1 += cards;
    }
    if(e.section === sections[2]){
      cards2 += cards;
    }
    if(e.section === sections[3]){
      cards3 += cards;
    }
    cards = '';
  });
  container0.innerHTML = cards0;
  container2.innerHTML = cards2;
  container3.innerHTML = cards3;
  // container.innerHTML = cards
}

console.log(drawProduct('all'))


// CLICK BTN PERECEDEROS

// document.getElementById('perecederos').addEventListener('click', function () {
//   drawProduct('Perecedero');
// })

// // CLICK BTN PERECEDEROS

// document.getElementById('no-perecederos').addEventListener('click', function () {
//   drawProduct('No perecedero');
// })