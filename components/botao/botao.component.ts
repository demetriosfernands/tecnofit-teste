import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent implements OnInit {

  @Input() classeBotao:string;
  @Input() tipo:string;
  @Input() label:string;
  @Input() loading:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
