import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CompracComponent } from './components/comprac/comprac.component';
import { CompraorderComponent } from './components/compraorder/compraorder.component';
import { CrudProductosComponent } from './components/crud-productos/crud-productos.component';
import { LoginComponent } from './components/login/login.component';
import { NavegaciontiendaComponent } from './components/navegaciontienda/navegaciontienda.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cliente/:id/tiendas', component: NavegaciontiendaComponent},
  {path: 'compra/:tiendaid/:productoid', component:CompracComponent},
  {path: 'crud-productos', component: CrudProductosComponent},
  {path: 'cliente/:id', component: ClienteComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'compras',component:CompraorderComponent},
  {path: 'tiendas/:id', component: BusquedaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
