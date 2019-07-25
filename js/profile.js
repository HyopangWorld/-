//박스 나타나기

$(window).scroll(function () {
			var height = $(document).scrollTop();
      if(height > 600){
        $('#profileIn').addClass( 'fadeInUp animated' );
      }
      if(height > 1200){
        $('#profileIntro').addClass( 'fadeInUp animated' );
      }
});
