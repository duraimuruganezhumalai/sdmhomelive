import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  exform: any;
      constructor( ) { 
        this.exform = new FormGroup({
          'name' : new FormControl('', Validators.required),
          'email' : new FormControl(null, [Validators.required, Validators.email]),
          'phone' : new FormControl(
            null,
            [
              Validators.required,
              Validators.pattern('[1-9]{1}[0-9]{9}')
            ]),
          'message' : new FormControl(null, [Validators.required, Validators.minLength(10)])
        });
      }

    //   ngOnInit(): void {
    //   }
      
    // }

    ngOnInit(): void {


      }
    
      clicksub() {
        console.log(this.exform.value);
        this.exform.reset();
      }
      get name() {
        return this.exform.get('name');
      }
      get email() {
        return this.exform.get('email');
      }
      get phone() {
        return this.exform.get('phone');
      }
      get message() {
        return this.exform.get('message');
      }
    
    }
