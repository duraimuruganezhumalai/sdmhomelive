import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {


 
  constructor() { 
    // $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    //   event.preventDefault();
    //   $(this).ekkoLightbox();
    // });
   
  }

  ngOnInit(): void {
  }

}
