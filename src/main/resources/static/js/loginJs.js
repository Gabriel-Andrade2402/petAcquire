function initializeLogin(){
	let blockSignUp=document.getElementById('blockLogin');
	setTimeout(function(){
		blockSignUp.style.top="12%";
		blockSignUp.style.opacity="1";
	},200);
}

function login(){
	let email=document.getElementById('inputLogin');
	let senha=document.getElementById('inputPassword');
	let dataUser=null;
	var personObject = {
		email:email.value,
		password:senha.value
	};
    $.ajax({
	    url: 'http://localhost:8080/login',
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
		if(dataUser!=null && dataUser['name']!=""){
			window.sessionStorage.setItem('userData',dataUser);
			window.sessionStorage.setItem('userName',dataUser['name']);
			redirect('http://localhost:8080/');
		}
	},300);	
}