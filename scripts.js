const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll =document.querySelector('.filter-all')
const buttonMapSports = document.querySelector('.sports-all')

function  formatCurrency(value){
  const newValue = value.toLocaleString('pt-br',{
    style: 'currency',
    currency:'BRL'
  })
  return newValue
}

function showAll(arrayCars) {
  let myLi = ""

  arrayCars.forEach(car => {
    myLi +=
      `
        <li>
            <img src= ${car.src} alt="Imagem do carro">
            <p>${car.name}</p>
            <p class="price"> ${formatCurrency(car.price)}</p>
        </li>
      `
  })
  list.innerHTML = myLi
}


function MapAll() {
  const newPrices = menuOptions.map((car) => ({
    ...car,
    price: car.price * 0.9
  }))
  showAll(newPrices)
}

function SumAll(){
  const totalValue = menuOptions.reduce( (acc, cur) => acc + cur.price, 0)

  list.innerHTML = 
  `
  <li>
  <img src="img/cart.png" alt="Imagem do carrinho de compras">
    <p class="price">A soma de todos os veículos é de R$ ${formatCurrency(totalValue)}</p>
  </li>
  ` 
}

function FilterAll(){
  const filterJustJdm = menuOptions.filter((car) => car.jdm === true)
  showAll(filterJustJdm)
}

function FilterAllSports(){
  const filterJustSports = menuOptions.filter((car) => car.sport === true)
  showAll(filterJustSports)
}


buttonSumAll.addEventListener('click', SumAll)
buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', MapAll)
buttonFilterAll.addEventListener('click', FilterAll)
buttonMapSports.addEventListener('click', FilterAllSports)