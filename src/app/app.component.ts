import { Component } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'firstdevelop';
  autoyear: number = new Date().getFullYear();




constructor() {

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

window.addEventListener("load", function () {
  let loader = document.querySelector(".loader");
  // loader.className += " hidden"; // class "loader hidden"
});



}

}
function newDate() {
  throw new Error('Function not implemented.');
}

