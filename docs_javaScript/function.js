function openNav(){
	var sideBar = document.getElementById("nav_mobile");
	sideBar.style.visibility = "visible";
	sideBar.style.width = "75%";
	sideBar.style.opacity = "0.95";
	sideBar.style.transitionDuration = "1s";
	
	var openButton = document.getElementById("icon_menu_open");
	openButton.style.display = "none";
	
	var closeButton = document.getElementById("icon_menu_close");
	closeButton.style.display = "block";
}

function closeNav(){
	var sideBar = document.getElementById("nav_mobile");
	sideBar.style.visibility = "hidden";
	sideBar.style.width = "0%";
	sideBar.style.transitionDuration = "1s";
	
	var openButton = document.getElementById("icon_menu_open");
	openButton.style.display = "block";
	
	var closeButton = document.getElementById("icon_menu_close");
	closeButton.style.display = "none";
}

function openMedio(){
	var content = document.getElementById("full_medio");
		
	if(content.style.display === 'block'){
		content.style.display = "none";		
	}
	else{
		content.style.display = "block";		
	}	
}

function openTecno(){
	var content = document.getElementById("full_tecno");
		
	if(content.style.display === 'block'){
		content.style.display = "none";		
	}
	else{
		content.style.display = "block";		
	}	
}

function openSuperior(){
	var content = document.getElementById("full_superior");
		
	if(content.style.display === 'block'){
		content.style.display = "none";		
	}
	else{
		content.style.display = "block";		
	}	
}

function openLinguagem(){
	var content = document.getElementById("full_linguagem");
		
	if(content.style.display === 'block'){
		content.style.display = "none";		
	}
	else{
		content.style.display = "block";		
	}	
}

function openTools(){
	var content = document.getElementById("full_tools");
		
	if(content.style.display === 'block'){
		content.style.display = "none";		
	}
	else{
		content.style.display = "block";		
	}	
}

function openLanguage(){
	var content = document.getElementById("full_language");
		
	if(content.style.display === 'block'){
		content.style.display = "none";		
	}
	else{
		content.style.display = "block";		
	}	
}

function openBase(){
	var content = document.getElementById("full_database");
		
	if(content.style.display === 'block'){
		content.style.display = "none";		
	}
	else{
		content.style.display = "block";		
	}	
}

function respEmail(){
	alert('E-mail não enviado.');
}

// A PARTIR DESTE PONTO DESENVOLVIDO COM AJUDA DE TUTORIAIS
// Referência: https://www.youtube.com/watch?v=POX3dT-pB4E&t=1615s (Pure JavaScript Type Writer Effect by Traversy Media)
class TypeWriter {
	
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIndex = 0;
		this.wait = parseInt(wait, 10);
		this.type();
		this.isDeleting = false;
	}

	 type() {
		const current = this.wordIndex % this.words.length;
		const fullTxt = this.words[current];

		if(this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

		let typeSpeed = 500;

		if(this.isDeleting) {
			typeSpeed /= 2;
		}

		if(!this.isDeleting && this.txt === fullTxt) {
			typeSpeed = this.wait;
			this.isDeleting = true;
		} else if(this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.wordIndex++;
			typeSpeed = 500;
		}

		setTimeout(() => this.type(), typeSpeed);
	}
}


document.addEventListener('DOMContentLoaded', init);

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}
