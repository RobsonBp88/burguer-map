const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonMapAll = document.querySelector('.map-all');
const buttonSumAll = document.querySelector('.sum-all');
const buttonFilterVegan = document.querySelector('.filter-vegan');

function formatCurrency(value) {

    return value.toLocaleString('pt-br', {

        style: 'currency',
        currency: 'BRL',

    })


}

const menuOptions = [

    { name: 'X-Salada', price: 12, vegan: false, src: './img/xsalada.jpeg' },
    
    { name: 'X-Bacon', price: 15, vegan: false, src: './img/xbacon.png' },
    
    { name: 'X-Bacon Egg', price: 20, vegan: false, src: './img/bacon-egg.png' },
    
    { name: 'Monstruoso', price: 25, vegan: false, src: './img/monstruoso.png' },
    
    { name: 'Big Vegano', price: 27, vegan: true, src: './img/xvegan.png' },
    
    { name: 'X-Vegano', price: 15, vegan: true, src: './img/monstruoso-vegan.png' },
    
    ];

function showAll(array) {
    let myLi = '';

    array.forEach((products) => {
        myLi += `
            <li>
                <img src="${products.src}">
                <p>${products.name}</p>
                <p class="item-price"> R$ ${formatCurrency(products.price)}</p>
            </li>
        `;
    });

    list.innerHTML = myLi;
    list.style.display = 'grid' 
}

function mapAllItens() {

    const newPrice = menuOptions.map((product) => ({

        ...product,
        price: product.price * 0.9,
        


    }

    ))

    showAll (newPrice)



}

function sumAllItens() {

    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)



list.innerHTML = `

    <li>    
        
        <p> O valor total dos ítens é R$ ${formatCurrency(totalValue)}</p>

    </li>

`

}

function filterVeganItens() {

    const filterJustVegan = menuOptions.filter( (product) => product.vegan)

    showAll(filterJustVegan)

}


buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonMapAll.addEventListener('click', mapAllItens);
buttonSumAll.addEventListener('click', sumAllItens);
buttonFilterVegan.addEventListener('click', filterVeganItens);


