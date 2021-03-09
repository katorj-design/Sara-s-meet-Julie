import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent implements OnInit {

  mensaje = '- Solo por hoy ';
  escondido = true;
  color = 'purple';

  sizes = [{
    name: 'mediano - 175 ml',
    id: 1
  },
    {
      name: 'grande - 220 ml',
      id: 2
    },
  ];

  sizes1 = [{
    name: 'pequeño - 35 ml',
  }];

  sizes2 = [{
    name: 'pequeño - 215 ml',
    id: 1
  },
    {
    name: 'mediano - 300 ml',
    id: 2
  },
    {
      name: 'grande - 415 ml',
      id: 3
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getMensaje(){
    return this.mensaje + '/ 2-5 p.m.';
  }
}
