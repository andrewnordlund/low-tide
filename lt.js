let links = null;
let bookmarkletURL = "low-tide.js";	// This is for later

let bookmarklet = "javascript:(function(){/*version 0.1.2*/let wave5things=['wave5topbar','wavestyle','wavescript','wave_sidebar_container','wave5bottombar','wave5_iconbox'];for (let i=0;i<wave5things.length;i++) {let wavething = document.getElementById(wave5things[i]);wavething.parentNode.removeChild(wavething);}let wave5icons=document.querySelectorAll('*[class*=wave5]');for (let i=0;i<wave5icons.length;i++){wave5icons[i].parentNode.removeChild(wave5icons[i]);}htmlEl=document.getElementsByTagName('html');htmlEl=htmlEl[0];if (htmlEl.hasAttribute('style')){if (htmlEl.getAttribute('style') == 'margin-left: 380px;'){htmlEl.removeAttribute('style');}else if(htmlEl.getAttribute('style').match(/margin-left: 380px;/)){htmlEl.setAttribute('style', htmlEl.getAttribute('style').replace('margin-left: 300px;',''));}}})();";

/*
fetch(bookmarkletURL)
	.then(popLinks)
	.then(response => response.json())
	.then(data => console.log(data));
*/

links = document.querySelectorAll("a.bookmarkletLink");
if (links) {
	for (let i = 0; i < links.length; i++) {
		links[i].setAttribute("href", bookmarklet);
	}
}
