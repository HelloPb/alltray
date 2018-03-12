import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Bhs, HHMM } from '../../../../../../shared/models/bhs';

@Component({
  selector: 'at-bh',
  templateUrl: './bh.component.html',
  styleUrls: ['./bh.component.css']
})
export class BhComponent implements OnInit {

  @Input() bhs: Bhs[] = [];

  constructor() {
  }

  public ngOnInit(): void {
  }
}
