//Navbar
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

//Show More


//Hamburger
const hamburger = document.querySelector('#hamburger');

const navMenu = document.querySelector('#menu');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//Filter Gallery
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })
}

window.addEventListener('scroll', handleScroll);

function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
    var scrolled = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
}

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// const checkbox = document.getElementById("checkbox")
// checkbox.addEventListener("change", () => {
//   document.body.classList.toggle("dark")
// })

// // Darkmode toggle
// const darkToggle = document.querySelector('#dark-toggle');
// const html = document.querySelector('html');

// darkToggle.addEventListener('click', function () {
//   if (darkToggle.checked) {
//     html.classList.add('dark');
//     localStorage.theme = 'dark';
//   } else {
//     html.classList.remove('dark');
//     localStorage.theme = 'light';
//   }
// });