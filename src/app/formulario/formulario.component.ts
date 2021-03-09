import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  newReservation = {
    titleEmail: 'Email',
    Email: '',
    Telefono: '',
    titleTelefono: 'Telefóno',
  };


  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  pulsando($event){
    console.log('Mi evento', $event);
  }

}
