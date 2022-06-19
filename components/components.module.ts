import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BotaoComponent } from './botao/botao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputContainerComponent } from './input-container/input-container.component';
import { JanelaModalComponent } from './janela-modal/janela-modal.component';

@NgModule({
  declarations: [
    LoginComponent,
    InputContainerComponent,
    BotaoComponent,
    JanelaModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class ComponentsModule { }
