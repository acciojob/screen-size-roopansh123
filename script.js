//your JS code here. If required.
let w = document.querySelector('.w');
let h = document.querySelector('.h');

window.addEventListener("resize", ()=>{
	w.textContent = window.innerWidth;
	h.textContent = window.innerHeight;
})