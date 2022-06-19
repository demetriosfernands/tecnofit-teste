import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = 'eve.holt@reqres.in';
  password: string = 'cityslicka';
  msgError: string = '';
  loading: boolean = false;
  @ViewChild('content') modal;

  constructor (private http: HttpClient, 
               private router: Router,
               private modalService: NgbModal) { }

  fazerLogin(formulario) {

    if(formulario.valid){

      this.loading = true;

      const {email, password} = formulario.value;

      this.http.post(`${environment.API}/login`, {email, password}).subscribe(res => {

        this.router.navigate(['admin']);
        
      }, (error) => {
    
        if (error.error.error == 'user not found') {
          this.msgError = 'Usuário não encontrado.'
        }

        this.modalService.open(this.modal, {ariaLabelledBy: 'modal-basic-title'});
        this.loading = false;

      }, () => {
         this.loading = false;
      });

    }else{
      Object.keys( formulario.controls).forEach(key => {
        if ( formulario.controls[key].invalid) {
          formulario.controls[key].markAsDirty();
        }
       });
    }
  }
}
