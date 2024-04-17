let sections = ['featured', 'fast', 'best', 'trends'];

const getData = async (category) => {

  return await fetch("assets/json/products.json")
    .then(res => res.json())
    .then((res) => {

      let filter = res.filter(function (res, i) {
        // return res.categoria === 'Perecedero';

        if (i <= 4 && category === 'fast') {
          console.log(i)
          return res.section === category;
        }
        // if (category === 'No perecedero') {
        //   return res.categoria === category;
        // }
        // if (category === 'all') {
        //   return res;
        // }
      });
      return filter;
    });
};

console.log(getData('featured'))

const drawProduct = async (category) => {
  let container = document.getElementById('container-products');
  let cards = '';
  var data = await getData(category);

  data.forEach(e => {
    cards += `<div class="product-card">
    <div class="box-img">
      <figure>
        <img src="assets/img/products/sh-1.jpg" alt="">
      </figure>
    </div>
    <div class="info-product">
      <span class="price">
        C$ ${e.price}
      </span>
      <p class="description">
        ${e.description}
      </p>
      <button class="btn-add" onclick="insertProduct(this)" data-item='${e.item}>+ Add</button>

    </div>
  </div>`;
  });
  container.innerHTML = cards
}

// CLICK BTN PERECEDEROS

// document.getElementById('perecederos').addEventListener('click', function () {
//   drawProduct('Perecedero');
// })

// // CLICK BTN PERECEDEROS

// document.getElementById('no-perecederos').addEventListener('click', function () {
//   drawProduct('No perecedero');
// })