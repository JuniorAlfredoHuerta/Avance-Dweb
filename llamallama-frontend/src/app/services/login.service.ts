import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API = 'http://localhost:8080/llamallama/v1/'


  constructor(private http:HttpClient) { }

  getClientebyId(id: number){
    return this.http.get(this.API+'cliente'+'/'+id)
  }

  getAuthCliente(id:number, pass: string){
    return this.http.get(this.API+'clienteAuth'+'/'+id+'/'+pass)
  }

  getTiendabyId(id :number){
    return this.http.get(this.API+'tienda'+'/'+id)
  }

  /*getAuthTienda(){
    return this.http.get(this.API+'')
  }*/

}
