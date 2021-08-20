function initializeLogin(){
	let blockLogin=document.getElementById('blockLogin');
	setTimeout(function(){
		if(window.innerWidth>1049){
			initializeForCpu(blockLogin);
		}else{
			if(window.innerWidth<768 && window.innerWidth>319){
				initializeForMobile(blockLogin);
			}else{
				if(window.innerWidth>767 && window.innerWidth<1050){
					initializeForIpad(blockLogin);
				}
			}
		}
	},200);
}
function initializeForMobile(blockLogin){
	//Landscape
	if(window.innerWidth>499){
		blockLogin.style.top="0%";
		blockLogin.style.opacity="1";
	}
	//Portrait
	if(window.innerWidth<500){
		blockLogin.style.top="12%";
		blockLogin.style.opacity="1";
	}
}
function initializeForCpu(blockLogin){
	blockLogin.style.top="12%";
	blockLogin.style.opacity="1";
}
function initializeForIpad(blockLogin){
	// landscape
	if(window.innerWidth>959){
		blockLogin.style.top="12%";
		blockLogin.style.opacity="1";
	}
	// portrait
	if(window.innerWidth<959){
		blockLogin.style.top="22%";
		blockLogin.style.opacity="1";
	}
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