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

  }
  
}
