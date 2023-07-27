const productQuantityMinus = Array.from(document.querySelectorAll('.product__quantity-control_dec'))
const productQuantityPlus = Array.from(document.querySelectorAll('.product__quantity-control_inc'))
const productAdd = Array.from(document.querySelectorAll('.product__add'))

function quantityProduct() {
    productQuantityMinus.forEach((minus) => {
        minus.addEventListener('click', (event) => {
        event.preventDefault()
        let quantityControls = minus.closest('.product__quantity-controls')
        let quantity = quantityControls.querySelector('.product__quantity-value')
        if (Number(quantity.textContent) <= 1) {
            quantity.textContent = 1
        } else {
            quantity.textContent = Number(quantity.textContent) - 1
        }
        })
    })
    productQuantityPlus.forEach((plus) => {
        plus.addEventListener('click', (event) => {
        event.preventDefault()
        let quantityControls = plus.closest('.product__quantity-controls')
        let quantity = quantityControls.querySelector('.product__quantity-value')
        quantity.textContent = Number(quantity.textContent) + 1
        })
    })
}

function cartAdd() {
    productAdd.forEach((product) => {
        product.addEventListener('click', (event) => {
            event.preventDefault()
            let productMain = product.closest('.product')
            let idProduct = productMain.getAttribute('data-id')
            let imageProduct = productMain.querySelector('.product__image')
            let image = imageProduct.getAttribute('src')
            let quantity = Number(productMain.querySelector('.product__quantity-value').textContent)
            let cartProducts = document.querySelector('.cart__products')
            let cartProductArray = Array.from(document.querySelectorAll('.cart__product'))
            const productInCard = cartProductArray.find(element => element.dataset.id == idProduct)
            if (productInCard) {
                let productCount = productInCard.querySelector('.cart__product-count')
                productCount.textContent = Number(productCount.textContent) + quantity
                } else {
                    cartProducts.innerHTML += `
                    <div class="cart__product" data-id="${idProduct}">
                        <img class="cart__product-image" src="${image}">
                        <div class="cart__product-count">${quantity}</div>
                    </div>`
                }
        })
    })
}

quantityProduct()
cartAdd()