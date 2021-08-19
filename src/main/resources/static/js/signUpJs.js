function initializeSignUp(){
	let blockSignUp=document.getElementById('blockSignUp');
	setTimeout(function(){
		blockSignUp.style.top="5%";
		blockSignUp.style.opacity="1";
	},200);
}



function registerFunction(){
	let name=document.getElementById('inputName');
	let lastName=document.getElementById('inputLastName');
	let email=document.getElementById('inputEmail');
	let phoneNumber=document.getElementById('inputPhoneNumber');
	let zipCode=document.getElementById('inputZipCode');
	let address=document.getElementById('inputAddress');
	let number=document.getElementById('inputNumber');
	let complement=document.getElementById('inputComplement');
	let password=document.getElementById('inputPassword');
	let dataUser=null;
	var personObject = {
	    name:name.value,
		lastName:lastName.value,
		phoneNumber:phoneNumber.value,
		email:email.value,
		address:address.value,
		number:number.value,
		complement:complement.value,
		cep:zipCode.value,
		password:password.value
	};
    $.ajax({
	    url: 'http://localhost:8080/register',
	    type: 'POST',
	    data: JSON.stringify(personObject),
	    contentType: 'application/json; charset=utf-8',
	    dataType: 'json',
	    async: true,
	    success: function(data, status){
	    	dataUser=data;
     	}
	});
	setTimeout(function (){
		if(dataUser['name']!=""){
			console.log('entrou');
			window.sessionStorage.setItem('userName',dataUser['name']);
			redirect('http://localhost:8080/');
		}
	},200);	
}