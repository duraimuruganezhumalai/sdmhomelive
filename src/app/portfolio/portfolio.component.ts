import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

 

  constructor() {

   
    

  }

  ngOnInit():void {
  
       $("#horizontal").twentytwenty();
      $("#horizontal").twentytwenty({
      orientation: 'horizontal'
      });


  }
}
