import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Bhs } from '../../../../../../../shared/models/bhs';

@Component({
  selector: 'at-bh',
  templateUrl: './bh.component.html',
  styleUrls: ['./bh.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BhComponent implements OnInit {

  @Input() bhs: Bhs[] = [];
  @Input() label = undefined;

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
