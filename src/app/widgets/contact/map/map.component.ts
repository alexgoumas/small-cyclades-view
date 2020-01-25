import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
declare var $ : any;

@Component({
  selector: 'angly-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

   @Input() width : any = "800";
   @Input() height : any = "350";

   constructor() { }

   ngOnInit() {

   	let data = `
   		.mapouter{
   		overflow:hidden;
   		height:`+this.height+`px;
   		width: `+this.width+`px;
   		}
   		.gmap_canvas{
   		background:none!important;height:
   		`+this.height+`px;
   		width: `+this.width+`px;
   		}`;

   		$(document).ready(function(){
   			$("style").append(data);
   		});
   }

}
