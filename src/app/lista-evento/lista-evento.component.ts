import {
  Component, EventEmitter, Input, OnInit, Output, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,
  SimpleChanges,
} from '@angular/core';

import {TareasComunesService} from '../core/services/tareas-comunes.service';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css'],
  providers: [TareasComunesService]
})

export class ListaEventoComponent implements OnInit, OnChanges, DoCheck,
    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() users: Array<string>;
  @Input() name: string;
  @Output() totalUsers = new EventEmitter<number>();
  // count: number = 0;
  user1 = '';

  constructor(private tareasComunes: TareasComunesService) { }

  // tslint:disable-next-line:typedef
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('1. ciclo de vida ngOnChanges ' + this.name);
  }

  ngOnInit(): void {
    console.log('2. ciclo de vida ngOnInIt ' + this.name);
  }

  ngDoCheck(): void {
    console.log('3. ciclo de vida ngDoCheck ' + this.name);
  }

  // tslint:disable-next-line:typedef
  ngAfterContentInit() {
    console.log('4. ciclo de vida ngAfterContentInit ' + this.name);
  }

  // tslint:disable-next-line:typedef
  ngAfterContentChecked() {
    console.log('5. ciclo de vida ngAfterContentChecked ' + this.name);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    console.log('6. ciclo de vida ngAfterViewInit ' + this.name);
  }

  // tslint:disable-next-line:typedef
  ngAfterViewChecked() {
    console.log('7. ciclo de vida ngAfterViewChecked ' + this.name);
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    console.log('8. ciclo de vida ngOnDestroy ' + this.name);
  }

  // tslint:disable-next-line:typedef
  enviarUsuarioSuscrito(user) {
    if (this.user1 !== user) {
      this.user1 = user;
      const total = this.tareasComunes.contar();
      // this.count ++;
      // console.log(this.count);
      this.totalUsers.emit(total);
    }

  }

}
