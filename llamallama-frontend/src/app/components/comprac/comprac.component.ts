import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/models/compra.model';
import { Compra_producto } from 'src/app/models/compra_producto.model';
import { Producto } from 'src/app/models/producto.model';
import { Tienda } from 'src/app/models/tienda.model';
import { Tienda_producto } from 'src/app/models/tienda_producto.model';
import { CompraserviceService } from 'src/app/services/compraservice.service';
import { ExplorerService } from 'src/app/services/explorer.service';

@Component({
  selector: 'app-comprac',
  templateUrl: './comprac.component.html',
  styleUrls: ['./comprac.component.css']
})
export class CompracComponent implements OnInit {
  public compraform: FormGroup;
  public producto =  new Producto();
  //public compras = new Compra();
  public compraprod = new Compra_producto();
  private idtienda: number;
  private idproducto: number;

  public tps: Tienda_producto[];

  public TPID = new Tienda_producto();

  private compra_productox: Compra_producto[];

  constructor(private fb:FormBuilder,
    private compraservice: CompraserviceService,
    private explorerservice:ExplorerService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.initForm();
    this.idtienda = Number(this.route.snapshot.paramMap.get('tiendaid'))
    this.idproducto= Number(this.route.snapshot.paramMap.get('productoid'))
    this.explorerservice.getTPByTidandPId(this.idtienda,this.idproducto).subscribe((result:any)=>{
      this.TPID = result.data;
    })
  }

  getTidandPid(){
    this.explorerservice.getTPByTidandPId(this.idtienda,this.idproducto).subscribe((result:any)=>{
      console.log(result.data);
      this.compraprod = result.data;  }

    )
  }


  getProductobyId(){
    this.compraservice.getProductoById(this.idproducto).subscribe((result: any) =>{
      this.producto=result.data
    })

  }


  /*getComprabyId(){
    this.compraservice.getComprabyId(this.idcompra).subscribe((result:any)=>{
      this.compras=result.data
    })
  }*/

  initForm(){
    this.compraform = this.fb.group({
      compraId: ['', Validators.required],
      cantproductos: [ '', Validators.required],
    });
  }
  setProCro(){
    this.compraprod.compraId= this.compraform.get('compraId')?.value;
    this.compraprod.productoId=this.idproducto;
    this.compraprod.cantproductos=this.compraform.get('cantproductos')?.value;
  }

  createCompraProducto(){
    this.setProCro()
    this.compraservice.createCompra_Producto(this.compraprod).subscribe((result:any)=>{
      console.log(result.data)
    })
  }

}
