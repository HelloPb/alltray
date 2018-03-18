import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Bhs } from '../../../../../../../shared/models/bhs';

@Component({
  selector: 'at-bh',
  templateUrl: './bh.component.html',
  styleUrls: ['./bh.component.css']
})
export class BhComponent implements OnInit {

  @Input() bhs: Bhs[] = [];
  @Input() edit = false;

  constructor() {
  }

  public addBh(): void {
    this.bhs.push(new Bhs());
  }

  public deleteBh(index: number): void {
    this.bhs.splice(index, 1);
  }

  public ngOnInit(): void {
  }
}
