import { Component, OnInit } from '@angular/core';
declare let $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  



  

  constructor() { 
    
  }
  ngOnInit() {
    $('.counter').counterUp();

  //   $('.counter-count').each( () => {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
       
  //         duration: 4000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });
    
  }
}