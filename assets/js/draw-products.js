let sections = ['featured', 'fast', 'best', 'Trends'];

const getData = async (category) => {

  let isInteger = Number.isInteger(category);

  return await fetch("assets/json/products.json")
    .then(res => res.json())
    .then((res) => {
      var count0 = 0;
      var count1 = 0;
      var count2 = 0;
      var count3 = 0;

      // var fil = res.filter(res => res.category === 'featured')

      if (isInteger) {  
        return fil = res.filter(res => res.id === category);
      }

      if (category !== 'all') {
        return fil = res.filter(res => res.category === category);
      } else {
        let filter = res.filter(function (res) {
          // return res.categoria === 'Perecedero';
          if (category === 'all') {

            if (res.section === sections[0]) {
              count0 += 1;
              if (count0 <= 5) {
                return res.section === sections[0];
              }
            }

            if (res.section === sections[1]) {
              count1 += 1;
              if (count1 <= 5) {
                return res.section === sections[1];
              }
            }

            if (res.section === sections[2]) {
              count2 += 1;
              if (count2 <= 5) {
                return res.section === sections[2];
              }
            }

            if (res.section === sections[3]) {
              count3 += 1;
              if (count3 <= 5) {
                return res.section === sections[3];
              }
            }

          }
        });
        return filter;

      }
    });
};

const drawProduct = async (category) => {
  var data = await getData(category);

  if (category === 'all') {
    var container0 = document.getElementById(sections[0]);
    var container1 = document.getElementById(sections[1]);
    var container2 = document.getElementById(sections[2]);
    var container3 = document.getElementById(sections[3]);
    var cards0 = '';
    var cards1 = '';
    var cards2 = '';
    var cards3 = '';
    var cards = '';

  } else {
    var cards = '';
    var containerCategory = document.getElementById('container-category-porducts')
  }

  // BLOQUE PARA DIBUJAR LAS CARDS DE LOS PRODUCOS
  // items q  ue no van
  // 56, 63, 45, 50

  data.forEach(e => {
    cards += `<div class="product-card">
    <div class="box-img">
      <figure>
        <img src="assets/img/products/iremove/${e.img_name}.png" alt="">
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
    if (category === 'all') {

      if (e.section === sections[0]) {
        cards0 += cards;
      }
      if (e.section === sections[1]) {
        cards1 += cards;
      }
      if (e.section === sections[2]) {
        cards2 += cards;
      }
      if (e.section === sections[3]) {
        cards3 += cards;
      }
      cards = '';
    }


  });
  if (category === 'all') {

    container0.innerHTML = cards0;
    container1.innerHTML = cards1;
    container2.innerHTML = cards2;
    container3.innerHTML = cards3;
  } else {
    document.getElementById('title-category').innerText = `${category.charAt(0).toUpperCase() + category.toLowerCase().slice(1)}`;
    containerCategory.style.display = 'grid'
    containerCategory.innerHTML = cards

  }
}

drawProduct('all');

$('#catCapillary').on('click', function () {
  drawProduct('CAPILAR');
})
$('#catMakeUp').on('click', function () {
  drawProduct('MAQUILLAJE');
})
$('#catManicure').on('click', function () {
  drawProduct('MANICURA');
})
$('#catPerfumery').on('click', function () {
  drawProduct('PERFUMERIA');
})
$('#catPersonalCare').on('click', function () {
  drawProduct('CUIDADO PERSONAL');
})


// CLICK BTN PERECEDEROS

// document.getElementById('perecederos').addEventListener('click', function () {
//   drawProduct('Perecedero');
// })

// // CLICK BTN PERECEDEROS

// document.getElementById('no-perecederos').addEventListener('click', function () {
//   drawProduct('No perecedero');
// })