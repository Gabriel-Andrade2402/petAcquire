var lastBlock=null;
function menuNavigationInitialize(){
	let titleNavigationAnimals=document.getElementById("buttonAnimals");
	let titleNavigationProducts=document.getElementById("buttonProducts");
	let titleNavigationLocation=document.getElementById("buttonLocation");
	let titleNavigationAboutUs=document.getElementById("buttonAboutUs");
	let blockNavigationAnimals=document.getElementById("blockNavigationAnimals");
	let blockNavigationProducts=document.getElementById("blockNavigationProducts");
	//let blockNavigationLocation=document.getElementById("buttonLocation");
	//let blockNavigationAboutUs=document.getElementById("buttonAboutUs");
	//Formating Animals
	titleNavigationAnimals.onmouseover=function(){
		clean(blockNavigationAnimals);
		blockNavigationAnimals.style.display="block";
		setTimeout(function(){
			blockNavigationAnimals.style.top="38%";
			blockNavigationAnimals.style.opacity="1";
		},100);
		lastBlock=blockNavigationAnimals;
	};
	titleNavigationAnimals.onmouseleave=function(){
		setTimeout(function(){
			blockNavigationAnimals.style.display="none";
		},100);
		blockNavigationAnimals.style.top="34%";
		blockNavigationAnimals.style.opacity="0";
	};
	//Formating Products
	titleNavigationProducts.onmouseover=function(){
		clean(blockNavigationProducts);
		blockNavigationProducts.style.display="block";
		setTimeout(function(){
			blockNavigationProducts.style.top="38%";
			blockNavigationProducts.style.opacity="1";
		},100);
		lastBlock=blockNavigationProducts;
	};
	titleNavigationProducts.onmouseleave=function(){
		setTimeout(function(){
			blockNavigationProducts.style.display="none";
		},100);
		blockNavigationProducts.style.top="34%";
		blockNavigationProducts.style.opacity="0";
	};
}
function clean(block){
	if(lastBlock!=null && lastBlock!=block){
		lastBlock.style.display="none";
		lastBlock.style.top="34%";
		lastBlock.style.opacity="0";
	}
};