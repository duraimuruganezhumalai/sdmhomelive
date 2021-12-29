import { Component } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'firstdevelop';


//   lightbox:any;
//  ngOnInit(){
          
//              //lightbox settings
//              this.lightbox = GLightbox({ 
//               selector: ".glightbox"
//              });
// }

// ===== Scroll to Top ==== 

constructor() {
 
//   $(window).scroll(() => {
//     if ($(this).scrollTop() >= 50) {        
//         $('#return-to-top').fadeIn(200);   
//     } else {
//         $('#return-to-top').fadeOut(200);  
//     }
//   });
//   $('#return-to-top').click(function() {      
//     $('body,html').animate({
//         scrollTop : 0                       
//     }, 500);
//   });  
// }
var btn = $('#button');

$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('.go-top').fadeIn('slow');
    if (scrolled < 200) $('.go-top').fadeOut('slow');
  });
  
  //Click event
  $('.go-top').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});

}

}