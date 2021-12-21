import { Component, OnInit } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    var lang = {
      "html": "100%",
      "css": "90%",
      "javascript": "70%",
      "php": "55%",
      "angular": "65%"
    };
    
    var multiply = 4;
    
    $.each( lang, function( language: string, pourcent: any) {
    
      var delay = 700;
      
      setTimeout(function() {
        $('#'+language+'-pourcent').html(pourcent);
      },delay*multiply);
      
      multiply++;
    
    });


  }

}
