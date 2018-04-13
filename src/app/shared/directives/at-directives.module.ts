
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[var]',
  exportAs: 'var'
})
export class VarDirective implements OnInit {

  @Input() var = false;

  constructor() { }

  ngOnInit() {
    this.var = false;
  }

}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VarDirective],
  exports: [VarDirective]
})
export class AtVarDirectivesModule { }
