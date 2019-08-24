function changeback() {
	document.body.style.backgroundColor="orange";
}
document.body.addEventListener("click",changeback);

function random() {
	var col=`#{String(75275237456685 * Math.random()).slice(0,6)}`;
	document.body.style.backgroundColor=col;
}
document.body.addEventListener("click",random);
