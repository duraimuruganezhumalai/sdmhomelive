import { Component, OnInit } from '@angular/core';
declare let $: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  column: any;

  constructor() {
  

  }
 

 ngOnInit() {


  // [...document.querySelectorAll('.first-column')].map(column => {
  //   column.style.setProperty('--animation', 'slide');
  //   column.style.setProperty('height', '200%');
  //   column.innerHTML = column.innerHTML + column.innerHTML;
  //   });

    $('.counter').counterUp()


    $("[id^=carousel-thumbs]").carousel({
      interval: false
    });
    
    /** Pause/Play Button **/
    $(".carousel-pause").click( () => {
      var id = $(this).attr("href");
      if ($(this).hasClass("pause")) {
        $(this).removeClass("pause").toggleClass("play");
        $(this).children(".sr-only").text("Play");
        $(id).carousel("pause");
      } else {
        $(this).removeClass("play").toggleClass("pause");
        $(this).children(".sr-only").text("Pause");
        $(id).carousel("cycle");
      }
      $(id).carousel;
    });
    
    /** Fullscreen Buttun **/
    $(".carousel-fullscreen").click( () => {
      var id = $(this).attr("href");
      $(id).find(".active").ekkoLightbox({
        type: "image"
      });
    });
    
    if ($("[id^=carousel-thumbs] .carousel-item").length < 2) {
      $("#carousel-thumbs [class^=carousel-control-]").remove();
      $("#carousel-thumbs").css("padding", "0 5px");
    }
    
    $("#carousel").on("slide.bs.carousel", function (e: { relatedTarget: any; }) {
      var id = parseInt($(e.relatedTarget).attr("data-slide-number"));
      var thumbNum = parseInt(
        $("[id=carousel-selector-" + id + "]")
          .parent()
          .parent()
          .attr("data-slide-number")
      );
      $("[id^=carousel-selector-]").removeClass("selected");
      $("[id=carousel-selector-" + id + "]").addClass("selected");
      $("#carousel-thumbs").carousel(thumbNum);
    });
    

  }
  
}
