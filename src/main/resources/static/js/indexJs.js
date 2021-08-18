function indexInitialize() {
	//window.sessionStorage.removeItem('userData');
    let logo=document.getElementById("logo");
    let menuNavigation=document.getElementById("menuNavigation");
    let dog=document.getElementById("dogBackgroundTop");
    setTimeout(function(){
    	logo.style.left="15%";
    	menuNavigation.style.left="23%";
    	dog.style.left="81%";
    	logo.style.opacity="1";
    	menuNavigation.style.opacity="1";
    	dog.style.opacity="1";
    },100);
    if(window.sessionStorage.getItem('userData')!=null){
    	userInitialize()
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
		buttonExit.appendChild(spanExit);
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