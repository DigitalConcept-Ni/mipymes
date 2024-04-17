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
        // var subtotal_exempt = 0.00;
        var subtotal = 0.00;
        // var iva = $('input[name="iva"]').val();
        // var discount = $('input[name="discount"]').val();
        this.details.products.forEach(function (value, index, array) {
            console.log(value)
            value.index = index;

            value.cant = parseInt(value.cant);
            value.subtotal = value.cant * parseFloat(value.precio);
            subtotal += value.subtotal;
        });

        // this.details.subtotal_exempt = subtotal_exempt;
        this.details.subtotal = subtotal;
        // this.details.discount = discount;

        // this.details.iva = (this.details.subtotal - this.details.discount) * 0.15;
        // this.details.total = ((this.details.subtotal + this.details.subtotal_exempt) - this.details.discount) + this.details.iva;

        // $('input[name="subtotal"]').val(this.details.subtotal.toFixed(2));
        // $('input[name="subtotal_exempt"]').val(this.details.subtotal_exempt.toFixed(2));
        // $('input[name="ivacalc"]').val(this.details.iva.toFixed(2));
        // $('input[name="total"]').val(this.details.total.toFixed(2));
    },
    listProduct: function (e) {
        let container = document.getElementById('continer-shop-items');
        const element = document.createElement("div");
        element.setAttribute("class", "shop-item")

        let card = `<div class="shop-img">
                <figure>
                    <img src="img/products/${e.img}.png" alt="">
                </figure>
            </div>
            <div class="shop-info">
                <h3>${e.producto}</h3>
                <span>${e.precio}</span>
                <h6>Cacao</h6>
                <p class="shop-p">${e.proveedor}</p>
                <div class="container-btn-shop">
                    <div class="input-group input-group-sm mb-3">
                        <span class="input-group-append">
                            <button type="button" class="btn btn-danger btn-flat">-</button>
                        </span>
                        <input type="text" value="1" class="form-control rounded-0">
                        <span class="input-group-append">
                            <button type="button" class="btn btn-success btn-flat btn-menu-+">+</button>
                        </span>
                    </div>

                </div>
            </div>`;

        element.innerHTML = card

        container.appendChild(element)

    }
}
const insertProduct = async (e) => {
    e.style.display = "None";
    let contador = document.getElementById('count-items');
    let searchedItem = await getData(parseInt(e.dataset.item));

    // console.log(sale.details.products.map(value => value.Item))
    console.log(sale.details)
    // console.log(searchedItem)

    contador.innerHTML = parseInt(contador.textContent) + 1;
    searchedItem[0].cant = 1;
    searchedItem[0].subtotal = 0.00;
    sale.details.products.push(searchedItem[0]);
    sale.calculateInvoice();
    sale.listProduct(searchedItem[0]);
}

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
