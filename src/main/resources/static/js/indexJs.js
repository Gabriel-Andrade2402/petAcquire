function indexInitialize() {
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
}