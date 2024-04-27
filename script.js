//your JS code here. If required.
const inputField = document.querySelector('#fname');
inputField.addEventListener('blur',function(){
	inputField.value = this.value.toUpperCase();
})
