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
    	if(window.scrollY>1200){
    		let imgArticleHistory=document.getElementById('imgArticleHistory');
    		let titleArticleHistory=document.getElementById('titleArticleHistory');
    		let contentArticleHistory=document.getElementById('contentArticleHistory');
    		imgArticleHistory.style.top="1%";
    		imgArticleHistory.style.opacity="1";
    		titleArticleHistory.style.top="-25%";
    		titleArticleHistory.style.opacity="1";
    		contentArticleHistory.style.top="-25%";
    		contentArticleHistory.style.opacity="1";
    	}
	});
}