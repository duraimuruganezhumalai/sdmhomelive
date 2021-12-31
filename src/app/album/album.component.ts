import { Component, OnInit } from '@angular/core';
declare let $: any;



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor() { 



  }

  ngOnInit(): void {

    
    $(".fancybox").fancybox({
      
      openEffect: "none",
      closeEffect: "none"
      
    });


    
  }

}
