import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor() {
  }


  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  pulsando($event){
    console.log('Mi evento', $event);
  }

}
