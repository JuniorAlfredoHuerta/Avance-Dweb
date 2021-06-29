import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public loginUserForm: FormGroup;
  public cliente = new Cliente();
  
  constructor(private fb: FormBuilder,
    private loginservice:LoginService,
    private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginUserForm = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    })
  }

  /*loginUser(){
    this.cliente.id= this.loginUserForm.get('usuario')?.value
    this.cliente.password= this.loginUserForm.get('password')?.value
  }*/


  getAuth(){
    var user: number = this.loginUserForm.get('usuario')?.value;
    var pass: string = this.loginUserForm.get('password')?.value; 
    this.loginservice.getAuthCliente(user,pass).subscribe((result:any)=>{
      console.log(result.data);
      this.cliente=result.data;
    });
  }

  getClientebyId(){

  }

}
