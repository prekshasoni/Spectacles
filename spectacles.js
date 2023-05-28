const addv =document.querySelector(".addv");
const arrowBtns =document.querySelectorAll(".addv button");
const firstaddvWidth =addv.querySelector(".addv1").offsetWidth;
let isDragging = false,startX,startScrollLeft;

arrowBtns.forEach(btn =>{
    btn.addEventListener("click",() => {
       addv.scrollLeft +=btn.id ==="previous"? -firstaddvWidth :firstaddvWidth;
    });
});
const dragStart = (e) =>
{
    isDragging=true;
    addv.classList.add("dragging");
    startX=e.pageX;
    startScrollLeft =addv.scrollLeft;
}
const dragging = (e)=>{
    if(!isDragging) return;
    addv.scrollLeft= startScrollLeft -(e.pageX - startX); 
}
const dragStop = () =>
{
    isDragging=false;
    addv.classList.remove("dragging");
}
addv.addEventListener("mousedown",dragStart);
addv.addEventListener("mousemove",dragging);
addv.addEventListener("mouseup",dragStop);

function right()
{
    document.getElementById('image1').src='specsimg5';
    document.getElementById('image2').src='specsimg6';
    document.getElementById('image3').src='specsimg7';
    document.getElementById('image4').src='specsimg8';
    document.getElementsByTagName('span')[0].innerHTML="Blend Edit";
    document.getElementsByTagName('span')[1].innerHTML="Air Clip On";
    document.getElementsByTagName('span')[2].innerHTML="Air Flex";
    document.getElementsByTagName('span')[3].innerHTML="Retro Aviator";
    document.getElementsByClassName('right')[0].style.display="none";
    document.getElementsByClassName('left')[0].style.display="block";
}
function left()
{
    document.getElementById('image1').src='specsimg1';
    document.getElementById('image2').src='specsimg2.webp';
    document.getElementById('image3').src='specsimg3';
    document.getElementById('image4').src='specsimg4';
    document.getElementsByTagName('span')[0].innerHTML="Round";
    document.getElementsByTagName('span')[1].innerHTML="Cat-Eye";
    document.getElementsByTagName('span')[2].innerHTML="Clubmaster";
    document.getElementsByTagName('span')[3].innerHTML="Transparent";
    document.getElementsByClassName('right')[0].style.display="block";
    document.getElementsByClassName('left')[0].style.display="none";
}

let scrollcontainer = document.querySelectorAll('.catalog');
let prvbtn = document.querySelectorAll('.scroll-left');
let nextbtn = document.querySelectorAll('.scroll-right');

scrollcontainer.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerwidth=containerDimensions.width;

nextbtn[i].addEventListener('click',()=>{
    item.scrollLeft+=containerwidth-20;
});

prvbtn[i].addEventListener('click',()=>{
    item.scrollLeft-=containerwidth+20;
});
}); 