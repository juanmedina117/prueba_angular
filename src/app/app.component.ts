import { Component, OnInit } from '@angular/core';
import { ConsumoService } from '../app/services/consumo.service';
import { Hero } from './services/consumo.service';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  heroes:Hero[] = [];
  cont:number = 1;
  constructor(private _heroresService:ConsumoService){}

  ngOnInit(){
    this.heroes = this._heroresService.getHeroes();
    //console.log(this.heroes);
    
  }

  mostrarImagen(imagen:any,nombre:string){

   
    Swal.fire({
      title: `${nombre}`,
      imageUrl: `${imagen}`,
      imageWidth: 600,
      imageHeight: 600,
      imageAlt: 'Custom image',
    })
    
  }

 
}

