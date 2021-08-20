function indexInitialize() {
	let logo=document.getElementById("logo");
    let menuNavigation=document.getElementById("menuNavigation");
    let dog=document.getElementById("dogBackgroundTop");
    setTimeout(function(){
    	if(window.innerWidth>1049){
    		initializeForCpu(logo,menuNavigation,dog);
    	}else{
	    	if(window.innerWidth<768 && window.innerWidth>319){
	    		initializeForMobile(logo,menuNavigation,dog);
	    	}else{
	    		if(window.innerWidth>767 && window.innerWidth<1050){
		    		initializeForIpads(logo,menuNavigation,dog);
		    	}
	    	}
	    }
    },100);
    if(window.sessionStorage.getItem('userName')!=null){
    	userInitialize()
    }
}
function initializeForMobile(logo,menuNavigation,dog){
	//Condicional para landscape e portrait
	if(window.innerWidth>499){
		logo.style.left="20%";
		menuNavigation.style.left="0%";
		dog.style.left="78%";
		logo.style.opacity="1";
		menuNavigation.style.opacity="1";
		dog.style.opacity="1";
	}
	if(window.innerWidth<500){
		//Condicional para telas maiores que 375px
		if(window.innerWidth>375){
			logo.style.left="-8%";
		}else{
			logo.style.left="15%";
		}
		menuNavigation.style.left="0%";
		dog.style.left="70%";
		logo.style.opacity="1";
		menuNavigation.style.opacity="1";
		dog.style.opacity="1";
	}
}
function initializeForCpu(logo,menuNavigation,dog){
	logo.style.left="15%";
	menuNavigation.style.left="23%";
	dog.style.left="81%";
	logo.style.opacity="1";
	menuNavigation.style.opacity="1";
	dog.style.opacity="1";
}
function initializeForIpads(logo,menuNavigation,dog){
	//Condicional para landscape
	if(window.innerWidth>959){
		logo.style.left="20%";
		menuNavigation.style.left="0%";
		dog.style.left="78%";
		logo.style.opacity="1";
		menuNavigation.style.opacity="1";
		dog.style.opacity="1";
	}
	// portrait
	if(window.innerWidth<959){
		logo.style.left="-10%";
		menuNavigation.style.left="0%";
		dog.style.left="70%";
		logo.style.opacity="1";
		menuNavigation.style.opacity="1";
		dog.style.opacity="1";
	}
}


function userInitialize(){
	let menu=document.getElementById('menuLogin');
	let buttonLogin=document.getElementById('buttonlogin');
	let buttonSignUp=document.getElementById('buttonSignUp');
	let buttonMenu=document.createElement('img');
	//Remove buttons for login and sign Up
	buttonLogin.style.display="none";
	buttonSignUp.style.display="none";
	buttonMenu.id="buttonMenu";
	buttonMenu.setAttribute('src','/imagens/comum/iconeMenu.png');
	buttonMenu.classList.add('iconeMenu');
	menu.appendChild(buttonMenu);
	buttonMenu.onclick=function(){
		onclickButtonMenu();
	};
}
function userLogout(){
	let menu=document.getElementById('menuLogin');
	let buttonLogin=document.getElementById('buttonlogin');
	let buttonSignUp=document.getElementById('buttonSignUp');
	let buttonMenu=document.getElementById('buttonMenu');
	//Remove buttons for login and sign Up
	buttonLogin.style.display="inline-block";
	buttonSignUp.style.display="inline-block";
	menu.removeChild(buttonMenu);
	window.sessionStorage.removeItem('userName');
	closeMenuUser();
}
function onclickButtonMenu(){
	let body=document.body;
	body.style.overflowY="hidden"
	if(document.getElementById('boxBackground')==null){
		//creation of parent elements --------------------
		let boxBackground=document.createElement('div');
		let menuNavigator=document.createElement('div');
		boxBackground.id="boxBackground";
		boxBackground.classList.add('boxBackground');
		boxBackground.onclick=function(){
			closeMenuUser()
		};
		menuNavigator.id="menuNavigatorLeft";
		menuNavigator.classList.add('menuNavigatorLeft');
		// end -------------------------------------------
		//creating hello button and elements of navigation
		let textHello=document.createElement('span');
		let buttonProfile=document.createElement('div');
		let buttonSetting=document.createElement('div');
		let buttonRequests=document.createElement('div');
		let buttonHistoric=document.createElement('div');
		let buttonFavorite=document.createElement('div');
		let buttonDonation=document.createElement('div');
		let buttonExit=document.createElement('div');
		textHello.textContent="Olá, "+window.sessionStorage.getItem('userName');
		textHello.classList.add('textHello');
		//button profile
		buttonProfile.classList.add('elementsMenuNavigatorLeft');
		let spanProfile=document.createElement('span');
		spanProfile.textContent="Profile";
		spanProfile.classList.add('textElementsMenuLeft');
		buttonProfile.onmouseover=function(){helperOver(buttonProfile,spanProfile)};
		buttonProfile.onmouseleave=function(){helperLeave(buttonProfile,spanProfile)};
		spanProfile.onmouseover=function(){helperOver(buttonProfile,spanProfile)};
		spanProfile.onmouseleave=function(){helperLeave(buttonProfile,spanProfile)};
		let iconProfile=document.createElement('img');
		iconProfile.setAttribute('src','/imagens/comum/iconePerson.png');
		iconProfile.classList.add('iconElementMenuLeft');
		buttonProfile.appendChild(iconProfile);
		buttonProfile.appendChild(spanProfile);
		//end
		//button Setting
		buttonSetting.classList.add('elementsMenuNavigatorLeft');
		let spanSetting=document.createElement('span');
		spanSetting.textContent="Setting";
		spanSetting.classList.add('textElementsMenuLeft');
		buttonSetting.onmouseover=function(){helperOver(buttonSetting,spanSetting)};
		buttonSetting.onmouseleave=function(){helperLeave(buttonSetting,spanSetting)};
		spanSetting.onmouseover=function(){helperOver(buttonSetting,spanSetting)};
		spanSetting.onmouseleave=function(){helperLeave(buttonSetting,spanSetting)};
		let iconSetting=document.createElement('img');
		iconSetting.setAttribute('src','/imagens/comum/iconeSettings.png');
		iconSetting.classList.add('iconElementMenuLeft');
		buttonSetting.appendChild(iconSetting);
		buttonSetting.appendChild(spanSetting);
		//end
		//button Requests
		buttonRequests.classList.add('elementsMenuNavigatorLeft');
		let spanRequests=document.createElement('span');
		spanRequests.textContent="Requests";
		spanRequests.classList.add('textElementsMenuLeft');
		buttonRequests.onmouseover=function(){helperOver(buttonRequests,spanRequests)};
		buttonRequests.onmouseleave=function(){helperLeave(buttonRequests,spanRequests)};
		spanRequests.onmouseover=function(){helperOver(buttonRequests,spanRequests)};
		spanRequests.onmouseleave=function(){helperLeave(buttonRequests,spanRequests)};
		let iconRequests=document.createElement('img');
		iconRequests.setAttribute('src','/imagens/comum/iconeRequests.png');
		iconRequests.classList.add('iconElementMenuLeft');
		buttonRequests.appendChild(iconRequests);
		buttonRequests.appendChild(spanRequests);
		//end
		//button Historic
		buttonHistoric.classList.add('elementsMenuNavigatorLeft');
		let spanHistoric=document.createElement('span');
		spanHistoric.textContent="Historic";
		spanHistoric.classList.add('textElementsMenuLeft');
		buttonHistoric.onmouseover=function(){helperOver(buttonRequests,spanRequests)};
		buttonHistoric.onmouseleave=function(){helperLeave(buttonRequests,spanRequests)};
		spanHistoric.onmouseover=function(){helperOver(buttonRequests,spanRequests)};
		spanHistoric.onmouseleave=function(){helperLeave(buttonRequests,spanRequests)};
		let iconHistoric=document.createElement('img');
		iconHistoric.setAttribute('src','/imagens/comum/iconeHistoric.png');
		iconHistoric.classList.add('iconElementMenuLeft');
		buttonHistoric.appendChild(iconHistoric);
		buttonHistoric.appendChild(spanHistoric);
		//end
		//button Favorite
		buttonFavorite.classList.add('elementsMenuNavigatorLeft');
		let spanFavorite=document.createElement('span');
		spanFavorite.textContent="Favorite";
		spanFavorite.classList.add('textElementsMenuLeft');
		buttonFavorite.onmouseover=function(){helperOver(buttonFavorite,spanFavorite)};
		buttonFavorite.onmouseleave=function(){helperLeave(buttonFavorite,spanFavorite)};
		spanFavorite.onmouseover=function(){helperOver(buttonFavorite,spanFavorite)};
		spanFavorite.onmouseleave=function(){helperLeave(buttonFavorite,spanFavorite)};
		let iconFavorite=document.createElement('img');
		iconFavorite.setAttribute('src','/imagens/comum/iconeFavorite.png');
		iconFavorite.classList.add('iconElementMenuLeft');
		buttonFavorite.appendChild(iconFavorite);
		buttonFavorite.appendChild(spanFavorite);
		//end
		//button Donation
		buttonDonation.classList.add('elementsMenuNavigatorLeft');
		let spanDonation=document.createElement('span');
		spanDonation.textContent="Donation";
		spanDonation.classList.add('textElementsMenuLeft');
		buttonDonation.onmouseover=function(){helperOver(buttonDonation,spanDonation)};
		buttonDonation.onmouseleave=function(){helperLeave(buttonDonation,spanDonation)};
		spanDonation.onmouseover=function(){helperOver(buttonDonation,spanDonation)};
		spanDonation.onmouseleave=function(){helperLeave(buttonDonation,spanDonation)};
		let iconDonation=document.createElement('img');
		iconDonation.setAttribute('src','/imagens/comum/iconeDonation.png');
		iconDonation.classList.add('iconElementMenuLeft');
		buttonDonation.appendChild(iconDonation);
		buttonDonation.appendChild(spanDonation);
		//end
		//button Exit
		buttonExit.classList.add('elementsMenuNavigatorLeft');
		let spanExit=document.createElement('span');
		spanExit.textContent="Exit";
		spanExit.classList.add('textElementsMenuLeft');
		buttonExit.onmouseover=function(){helperOver(buttonExit,spanExit)};
		buttonExit.onmouseleave=function(){helperLeave(buttonExit,spanExit)};
		spanExit.onmouseover=function(){helperOver(buttonExit,spanExit)};
		spanExit.onmouseleave=function(){helperLeave(buttonExit,spanExit)};
		let iconExit=document.createElement('img');
		iconExit.setAttribute('src','/imagens/comum/iconeExit.png');
		iconExit.classList.add('iconElementMenuLeft');
		buttonExit.appendChild(iconExit);
		buttonExit.appendChild(spanExit);
		buttonExit.onclick=function(){userLogout()};
		//end
		//end --------------------------------------------
		//Add elements in menuNavigator
		menuNavigator.appendChild(textHello);
		menuNavigator.appendChild(buttonProfile);
		menuNavigator.appendChild(buttonSetting);
		menuNavigator.appendChild(buttonRequests);
		menuNavigator.appendChild(buttonFavorite);
		menuNavigator.appendChild(buttonDonation);
		menuNavigator.appendChild(buttonExit);
		//end --------------------------------------------
		body.appendChild(boxBackground);
		body.appendChild(menuNavigator);
	}else{
		closeMenuUser();
	}
}
function closeMenuUser(){
	let body=document.body;
	let boxBackground=document.getElementById('boxBackground');
	let menuNavigator=document.getElementById('menuNavigatorLeft');
	body.style.overflowY="auto";
	body.removeChild(boxBackground);
	body.removeChild(menuNavigator);
}
//helper methods to hover ----------------------------------
function helperOver(div,span){
	div.style.background="#98FB98";
	span.style.color="#FFFAFA";
	div.style.cursor="pointer";
	span.style.cursor="pointer";
}
function helperLeave(div,span){
	div.style.background="#FFFAFA";
	span.style.color="#363636";
	div.style.cursor="default";
	span.style.cursor="default";
}
//Fim ------------------------------------------------------