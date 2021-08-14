function ScrollManipulation(){
	window.addEventListener('scroll',function(ev){
		if (window.scrollY >200){
    		let imgArticleMeet=document.getElementById('imgArticleMeet');
    		let titleArticleMeet=document.getElementById('titleArticleMeet');
    		let contentArticleMeet=document.getElementById('contentArticleMeet');
    		imgArticleMeet.style.top="0px";
    		imgArticleMeet.style.opacity="1";
    		titleArticleMeet.style.top="-320px";
    		titleArticleMeet.style.opacity="1";
    		contentArticleMeet.style.top="-100px";
    		contentArticleMeet.style.opacity="1";
    	}
    	if(window.scrollY>800){
    	
    	}
    	if(window.scrollY>1400){
    		
    	}
    	if(window.scrollY>2100){
    		
    	}
    	if(window.scrollY>2800){
    		
    	}
    	if(window.scrollY<100){
    	
    	}

	});
}