import { Component, OnInit, Input } from '@angular/core';
import { Speaker } from '../../models/speaker.model';

@Component({
  selector: 'angly-tabStructure',
  templateUrl: './tabStructure.component.html',
  styleUrls: ['./tabStructure.component.scss']
})
export class TabStructureComponent implements OnInit {

    @Input() tabsContent : any;
    @Input() speaker: Speaker = {} as Speaker;

	constructor() { }

	ngOnInit() {
	}

}
