import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['input-container.component.css']
})
export class InputContainerComponent implements AfterContentInit {

  input: any;
  @Input() msgError: string;
  @Input() label: string;
  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngAfterContentInit() {
    this.input = this.model;
  }

  campoInvalido() {
    return this.input?.invalid && this.input?.dirty;
  }
}
