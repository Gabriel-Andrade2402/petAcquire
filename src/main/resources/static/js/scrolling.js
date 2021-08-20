function ScrollManipulation(){
	window.addEventListener('scroll',function(ev){
		if (window.scrollY >200){
    		let imgArticleMeet=document.getElementById('imgArticleMeet');
    		let titleArticleMeet=document.getElementById('titleArticleMeet');
    		let contentArticleMeet=document.getElementById('contentArticleMeet');
    		if(window.innerWidth>1049){
    			scrollForCpu200(imgArticleMeet,titleArticleMeet,contentArticleMeet);
	    	}
	    	if(window.innerWidth<768 && window.innerWidth>319){
	    		scrollForMobile200(imgArticleMeet,titleArticleMeet,contentArticleMeet);
	    	}
    	}
    	if(window.scrollY>1200){
    		let imgArticleMeet=document.getElementById('imgArticleMeet');
    		let titleArticleMeet=document.getElementById('titleArticleMeet');
    		let contentArticleMeet=document.getElementById('contentArticleMeet');
    		if(window.innerWidth>1049){
    			scrollForCpu1200(imgArticleMeet,titleArticleMeet,contentArticleMeet);
	    	}
	    	if(window.innerWidth<768 && window.innerWidth>319){
	    		scrollForMobile1200(imgArticleMeet,titleArticleMeet,contentArticleMeet);
	    	}
    	}
	});
}


function scrollForMobile200(imgArticleMeet,titleArticleMeet,contentArticleMeet){
	if(window.innerWidth>415){
		imgArticleMeet.style.top="0px";
		imgArticleMeet.style.opacity="1";
		titleArticleMeet.style.top="-55px";
		titleArticleMeet.style.opacity="1";
		contentArticleMeet.style.top="-70px";
		contentArticleMeet.style.opacity="1";
	}
	if(window.innerWidth<416){
		imgArticleMeet.style.top="0px";
		imgArticleMeet.style.opacity="1";
		titleArticleMeet.style.top="-50px";
		titleArticleMeet.style.opacity="1";
		contentArticleMeet.style.top="-65px";
		contentArticleMeet.style.opacity="1";
	}
}
function scrollForMobile1200(){
	if(window.innerWidth>415){
    		imgArticleHistory.style.top="1%";
    		imgArticleHistory.style.opacity="1";
    		titleArticleHistory.style.top="-25%";
    		titleArticleHistory.style.opacity="1";
    		contentArticleHistory.style.top="-25%";
    		contentArticleHistory.style.opacity="1";
	}
	if(window.innerWidth<416){
			imgArticleHistory.style.top="1%";
    		imgArticleHistory.style.opacity="1";
    		titleArticleHistory.style.top="-15%";
    		titleArticleHistory.style.opacity="1";
    		contentArticleHistory.style.top="-15%";
    		contentArticleHistory.style.opacity="1";
	}
}
function scrollForCpu200(imgArticleMeet,titleArticleMeet,contentArticleMeet){
	imgArticleMeet.style.top="0px";
	imgArticleMeet.style.opacity="1";
	titleArticleMeet.style.top="-320px";
	titleArticleMeet.style.opacity="1";
	contentArticleMeet.style.top="-100px";
	contentArticleMeet.style.opacity="1";
}
function scrollForCpu1200(){
	imgArticleHistory.style.top="1%";
	imgArticleHistory.style.opacity="1";
	titleArticleHistory.style.top="-25%";
	titleArticleHistory.style.opacity="1";
	contentArticleHistory.style.top="-25%";
	contentArticleHistory.style.opacity="1";
}