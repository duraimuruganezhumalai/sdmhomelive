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
  
    //  $("#horizontal").twentytwenty();
    //   $("#horizontal").twentytwenty({
    //   orientation: 'horizontal'
    //   });
$(function() {
  $(".box[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5});
});
//
// // // OR
// //
// // $(function() {
// //   $(".box").twentytwenty();
// // });
// To understand "{default_offset_pct:0.3}":
// $(function() {
//   $("#img1[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.3});
// });

// $(function() {
//   $("#img2[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5});
// });

// $(function() {
//   $("#img3[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.8});
// });

// $(function() {
//   $("#img4[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5});
// });

// $(function() {
//   $("#img5[data-orientation!='vertical']").twentytwenty({default_offset_pct:0.5});
// });
      
  }
}
