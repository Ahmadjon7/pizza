const elSelect = document.querySelector('#select');
const elBread = document.querySelector('#bread');

elSelect.addEventListener('click', function(e){
    e.preventDefault();
    
    if(elSelect.value){
        elBread.textContent = elSelect.value
    }
})


//NON TANLASH
const elRadius = document.querySelectorAll('.size-wrapper__label');
const sizeOfbread = document.querySelector('#sizeOfBread');

elRadius.forEach(item => {
    item.addEventListener('click', function(){
        sizeOfbread.textContent = item.textContent
    })
})


//kattaligini tanlash

let ingredients = document.querySelectorAll('.hold__input');
let litag = document.querySelector('#li-wrapper');

ingredients.forEach(tag => {
    tag.addEventListener('click', function(){
        let li = document.createElement('li');
        li.append(tag.dataset.add)

        litag.appendChild(li);
    })
})

let eladds = document.querySelectorAll('.hold__inputt');
let eladdition = document.querySelector('#additional-wrapper');

eladds.forEach(item => {
    item.addEventListener('click', function(){
        let li = document.createElement('li');
        li.append(item.dataset.extra);

        eladdition.appendChild(li)
    })
})

// Modal


const singForm = document.querySelector("#signup-form")
const order = document.querySelector('.to-order')
const message = document.querySelector('.message')
const xMark = document.querySelector('.fa-xmark')

order.addEventListener('click', (e) => {
    e.preventDefault()

    message.classList.add('text')

      // if(singForm.value == order){
    //     console.log(singForm)
    //     message.classList.add('text')
    //     message.getAttribute.innerHTML = `<p class="message__text">Buyurtma qabul qilindi</p>`
    // }else if( singForm.value == 0){
    //     message.classList.add('text')
    //     message.setAttribute.innerHTML = `<p class="message__text">Xato malumot</p>`
    // }
    
})
xMark.addEventListener('click',(e) =>{
    message.classList.remove('text')
})