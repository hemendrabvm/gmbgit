
// lightbox gallery 

     $(document).ready(function() {
// get video source from data-src button
var $videoSrc;  
$('.video-btn').click(function() {
   $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
// autoplay video on modal load  
$('#myModal').on('shown.bs.modal', function (e) {
// youtube iframe configuration and settings
$("#video").attr('src',$videoSrc + "?autoplay=1&rel=0&controls=1&loop=1&modestbranding=1"); 
})
// stop playing the youtube video when modal closed
$('#myModal').on('hide.bs.modal', function (e) {
   // stop video
   $("#video").attr('src',$videoSrc); 
}) 
});


// fix footer 

//  $(document).ready(function() {
 
// siteFooter();
//  $(window).resize(function() {
//      siteFooter();
//  });
 
//  function siteFooter() {
//      var siteContent = $('#site-content');
//      var siteContentHeight = siteContent.height();
//      var siteContentWidth = siteContent.width();

//      var siteFooter = $('#site-footer');
//      var siteFooterHeight = siteFooter.height();
//      var siteFooterWidth = siteFooter.width();

//      console.log('Content Height = ' + siteContentHeight + 'px');
//      console.log('Content Width = ' + siteContentWidth + 'px');
//      console.log('Footer Height = ' + siteFooterHeight + 'px');
//      console.log('Footer Width = ' + siteFooterWidth + 'px');

//      siteContent.css({
//          "margin-bottom" : siteFooterHeight + 50
//      });
//  };
// });





  // script.js 

// window.addEventListener('scroll', function() {
//     const header = document.getElementById('header');
//     const stickyClass = 'sticky';
//     const scrollPosition = window.scrollY;

//     if (scrollPosition > 0) {
//         header.classList.add(stickyClass);
//     } else {
//         header.classList.remove(stickyClass);
//     }
// });
