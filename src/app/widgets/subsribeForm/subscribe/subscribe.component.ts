import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: '[angly-subscribe]',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

   @Input() subscribeFormClasses : any;

   /* Form name */
   subscribe : FormGroup;
   emailPattern : any = /\S+@\S+\.\S+/;
   subscribed: boolean = false;

   constructor( private formBuilder : FormBuilder, private _apiService: ApiService ) {
      this.subscribe = this.formBuilder.group({
         email : [null, [Validators.required, Validators.pattern(this.emailPattern)] ]
      });
      this.subscribed = localStorage.getItem("subscribed") ? Boolean(localStorage.getItem("subscribed")) : false;
   }

   ngOnInit() {
   }

   subscribeNow(value:any)
   {
      if(this.subscribe.valid)
      {
         this._apiService.subscribeToMailingList(this.subscribe.get('email').value).then(() => {
            this.subscribed = true;
            localStorage.setItem("subscribed", "true");
         });
      } else{
         console.log("Error!");
      }
   }

}
