import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CardComponent } from './card/card.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NavComponent } from './nav/nav.component';
import { FormularioEventoComponent} from "./formulario-evento/formulario-evento.component";


const routes: Routes = [
    {path: 'formulario', component: FormularioComponent},
    {path: 'card', component: CardComponent},
    {path: 'carrusel', component: CarruselComponent},
    {path: 'nav', component: CarruselComponent},
    {path: '', component: NavComponent},
    {path: 'formulario-evento', component: FormularioEventoComponent},
    {path: 'lista-evento', component: FormularioEventoComponent}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }

