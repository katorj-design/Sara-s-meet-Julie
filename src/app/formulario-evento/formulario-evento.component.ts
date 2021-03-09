import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-formulario-evento',
  templateUrl: './formulario-evento.component.html',
  styleUrls: ['./formulario-evento.component.css']
})
export class FormularioEventoComponent implements OnInit {

  @ViewChild('email', {static: true}) email: ElementRef;

  constructor() { }
  listUsers = [];
  totalSuscritos: number = 0;


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  enviarMail(email){
    console.log(email);
    const user2 = this.email.nativeElement.value;
    console.log(user2);
    this.listUsers.push(user2);
    console.log(this.listUsers);
  }

  addNewUser(number){
    this.totalSuscritos = number;

  }
}
