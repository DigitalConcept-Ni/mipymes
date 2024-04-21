var sale = {
    details: {
        // subtotal_exempt: 0.00,
        subtotal: 0.00,
        iva: 0.00,
        discount: 0.00,
        total: 0.00,
        products: [],
        products_review: []
    },
    calculateInvoice: function () {
        let total = document.getElementById('total-mount')
        // var subtotal_exempt = 0.00;
        var subtotal = 0.00;
        // var iva = $('input[name="iva"]').val();
        // var discount = $('input[name="discount"]').val();
        this.details.products.forEach(function (value, index, array) {
            let ttProduct = document.getElementById(value.id)
            value.index = index;

            value.cant = parseInt(value.cant);
            value.subtotal = value.cant * parseFloat(value.price);
            subtotal += value.subtotal;
            ttProduct.innerHTML = value.subtotal;
        });
        this.details.total = subtotal;

        total.innerHTML = subtotal;
    },
    listProduct: function () {
        let cards = '';
        let container = document.getElementById('continer-shop-items');
        // const element = document.createElement("div");
        // element.setAttribute("class", "shop-item")
        this.details.products.forEach(e =>{
            cards += `<div class="shop-item">
            <div class="shop-img">
                <figure>
                    <img src="assets/img/products/${e.img_name}.png" alt="">
                </figure>
            </div>
            <div class="shop-info">
                <h6>${e.description}</h6>
                <span>C$ ${e.price}</span>
                <p class="shop-p">${e.category}</p>
                <div class="container-btn-shop">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-append">
                                <button onclick="deleteItem(${e.id})" type="button" class="btn btn-danger btn-flat">
                                    <i class="fa fa-trash"></i>
                                </button>
                        </span>
                        <input onchange="btnShopPlus(this)" data-id="${e.id}" name="cant" type="number" min+"1" max="1000" step="1" value="1" class="form-control rounded-0">
                    </div>
                    <hr>
                    <span>Total producto: C$<span id="${e.id}">0.00</span></span>
                    </div>
                </div>
            </div>`;
        });

        // element.innerHTML = card
        container.innerHTML = cards;
        this.calculateInvoice();
        // container.appendChild(element)

    }
}
const insertProduct = async (e) => {
    e.style.display = "None";
    let contador = document.getElementById('count-items');
    let searchedItem = await getData(parseInt(e.dataset.item));

    // console.log(sale.details.products.map(value => value.Item))
    // console.log(sale.details)
    // console.log(searchedItem)

    contador.innerHTML = parseInt(contador.textContent) + 1;
    searchedItem[0].cant = 1;
    searchedItem[0].subtotal = 0.00;
    sale.details.products.push(searchedItem[0]);
    sale.listProduct();  
    // sale.calculateInvoice();
}

const deleteItem = (id) =>{
    let contador = document.getElementById('count-items');
    contador.innerHTML = parseInt(contador.textContent) - 1;
    let index = sale.details.products.findIndex(index => index.id == id);
    sale.details.products.splice(index, 1);
    sale.listProduct();
}

const btnShopPlus = (e) =>{
    let id = e.getAttribute('data-id');
    let index = sale.details.products.findIndex(index => index.id == id);
    sale.details.products[index].cant = $(e).val();
    sale.calculateInvoice()
}

$(function(){
    $('#container-count').on('click', function(){
        Swal.fire({
            title: "Proceso de compra",
            text: "Su pedido será entregado en un periodo de 1 hábil",
            // icon: "question"
          });
        sale.details.products = [];
        sale.listProduct();
        let contador = document.getElementById('count-items');
        contador.innerHTML = 0;
    })
})


let menuShop = document.querySelector('#shop-menu'); // select the buttons on the menu panel
// let links = document.querySelectorAll('a[class="navbar-link"]'); // Select all links from the panel menu


const btnIconShop = () => {
    let btn = document.querySelector('.btn-icon-shop');

    btn.addEventListener('click', function () {
        menuShop.classList.toggle('visible');
    })
}

const btnIconShopX = () => {
    let btn = document.querySelector('.btn-icon-shop-x');

    btn.addEventListener('click', function () {
        menuShop.classList.toggle('visible');
    })
}

btnIconShop();
btnIconShopX();
