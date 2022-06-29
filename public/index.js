

  $(function(){
 	 let lastScrollTop = 0, delta = 5;
 	 $(window).scroll(function(){
 		 let nowScrollTop = $(this).scrollTop();
 		 if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
 		 	if (nowScrollTop > lastScrollTop && nowScrollTop>=350){
 	$("#arrow").removeClass("arrow");
 		 	} else {

        if(nowScrollTop <=350){
 			$("#arrow").addClass("arrow");
    }
 			}
 		 lastScrollTop = nowScrollTop;
 		 }
 	 });
  });
