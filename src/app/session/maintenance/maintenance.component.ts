import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angly-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  subscribeFormClasses : any = {rowClass:"row", fieldClass:"col-sm-12 col-md-6"}

}
