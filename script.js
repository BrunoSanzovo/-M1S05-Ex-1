document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');
    const totalElement = document.getElementById('total');

    const products = [
        { id: 1, name: 'Arroz', price: 5.99 },
        { id: 2, name: 'Feijão', price: 3.99 },
        { id: 3, name: 'Macarrão', price: 2.49 },
        { id: 4, name: 'Óleo de Soja', price: 4.50 },
        { id: 5, name: 'Açúcar', price: 3.29 },
        { id: 6, name: 'Café', price: 8.99 },
        { id: 7, name: 'Leite', price: 2.79 },
        { id: 8, name: 'Pão', price: 3.49 },
        { id: 9, name: 'Banana', price: 1.99 },
        { id: 10, name: 'Maçã', price: 2.49 }
    ];

    // Função para exibir os produtos na página
    function displayProducts() {
        productList.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `<p>${product.name} - R$${product.price.toFixed(2)}</p>`;
            productDiv.onclick = () => addToCart(product);
            productList.appendChild(productDiv);
        });
    }

    // Função para adicionar produtos ao carrinho
    function addToCart(product) {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${product.name} - R$${product.price.toFixed(2)}`;
        cartList.appendChild(cartItem);

        // Atualizar total
        updateTotal(product.price);
    }

    // Função para atualizar o total
    function updateTotal(price) {
        const currentTotal = parseFloat(totalElement.innerText);
        totalElement.innerText = (currentTotal + price).toFixed(2);
    }

    // Função para finalizar a compra
    function checkout() {
        alert('Compra finalizada! Total: R$' + totalElement.innerText);
        // Limpar carrinho
        cartList.innerHTML = '';
        totalElement.innerText = '0.00';
    }

    // Inicializar a exibição dos produtos
    displayProducts();
});
