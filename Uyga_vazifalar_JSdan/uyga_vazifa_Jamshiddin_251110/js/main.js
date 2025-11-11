const mode = document.querySelector('.mode')

const login = document.querySelector('.login')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.modal_button_X')

login.addEventListener('click', () => {
    modal.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
})

const password = document.getElementById("password");
const showPassword = document.querySelector('.hidden_password');

showPassword.addEventListener('click', () => {
    let showType = password.getAttribute('type');
    if (showType == 'password') {
        password.setAttribute('type', 'text');
        password.setAttribute('id', 'showPassword')
    } else {
        password.setAttribute('type', 'password');
        password.setAttribute('id', 'hiddenPassword')
    }

})





const chooseBtns = document.querySelector('.choose_car_btns')
const choosebtn = document.querySelectorAll('.choose_car_btn')
const btnViewAll = document.querySelector('.choose_car_view_btn')
chooseBtns.addEventListener('click', (e) => {
    const el = e.target;
    if (el.id === '1') {
        chooseBtns.children[0].classList.remove('choose_car_btn');
        chooseBtns.children[0].classList.add('active_choose_car_btn');
        chooseBtns.children[1].classList.add('choose_car_btn');
        chooseBtns.children[2].classList.add('choose_car_btn');
    } if (el.id === '2') {
        chooseBtns.children[1].classList.remove('choose_car_btn');
        chooseBtns.children[1].classList.add('active_choose_car_btn');
        chooseBtns.children[0].classList.add('choose_car_btn');
        chooseBtns.children[2].classList.add('choose_car_btn');
    } if (el.id === '3') {
        chooseBtns.children[2].classList.remove('choose_car_btn');
        chooseBtns.children[2].classList.add('active_choose_car_btn');
        chooseBtns.children[1].classList.add('choose_car_btn');
        chooseBtns.children[0].classList.add('choose_car_btn');
    }
    if (el.id === '4') {

    }
})
btnViewAll.addEventListener('click', (e) => {
    const el = e.target;
    if (el.id === '4') {
        const firstChild = btnViewAll.children[0]


        firstChild.classList.toggle('active_choose_car_btn')


        if (!firstChild.classList.contains('active_choose_car_btn')) {

            firstChild.classList.add('choose_car_btn')
        } else {
            firstChild.classList.remove('choose_car_btn')
        }
    }
})


// btnViewAll.addEventListener('click', (e) => {
//     const el = e.target;
//     if (el.id === '4') {
//         const firstChild = btnViewAll.children[0];

//         // active klassni almashtiramiz
//         firstChild.classList.toggle('active_choose_car_btn');

//         // va choose_car_btn klassini shunga mos ravishda qo'shamiz/olib tashlaymiz
//         if (!firstChild.classList.contains('active_choose_car_btn')) {
//             firstChild.classList.add('choose_car_btn');
//         } else {
//             firstChild.classList.remove('choose_car_btn');
//         }
//     }
// });
window.addEventListener('DOMContentLoaded', () => {

    const saveMode = localStorage.getItem('theme');
    document.body.classList.add(saveMode)

})


mode.addEventListener('click', () => {

    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')) {

        localStorage.setItem('theme', 'dark');

    } else {

        localStorage.setItem('theme', 'light');

    }
})