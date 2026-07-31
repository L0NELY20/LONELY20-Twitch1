document.querySelectorAll(".card").forEach((card) => {

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(169,112,255,.18),
rgba(20,13,30,.95) 60%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background=
"rgba(20,13,30,.92)";

});

});

window.addEventListener("load",()=>{

document.body.animate(

[
{
opacity:0,
transform:"translateY(20px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],

{
duration:700,
fill:"forwards"
}

);

});
