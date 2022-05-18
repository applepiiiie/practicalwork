const images = document.querySelectorAll('.slider .slider_line img');
const sliderLine = document.querySelector('.slider_line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
window.addEventListener('resize', init);
init(); 

document.querySelector('.slider_next').addEventListener('click', function(){
    count++;
    if (count >= images.length){
        count = 0;
    }
    rollSlider();

});
document.querySelector('.slider_prev').addEventListener('click', function(){
    count--;
    if (count < 0){
        count = images.length - 1;
    }
    rollSlider();

});
function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}


var modal = document.getElementById('myModal');
var img = document.querySelectorAll('#img');
var modalImg = document.getElementById('img01');
for (let i = 0; i < img.length; i++) {
	img[i].addEventListener('click', popupimg);
  }
function popupimg(){
	let imageSrc = this.getAttribute('src');
	modal.style.display="flex";
    modalImg.src = imageSrc;
	document.body.style.overflow = 'hidden';
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
    modal.style.display = "none";
	document.body.style.overflow = 'auto';
}
    // Закрытие окна по клику вне области.
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
			document.body.style.overflow = 'auto';
        }
    });

    // Закрытие окна по нажатию клавиши Escape.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
			document.body.style.overflow = 'auto';
        }
    });



$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})