import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { VariablesGlService } from '../services/variables-gl.service';
import { fadeAnimation } from '../shared/animaciones/fade';
import { flipInXAnimation } from '../shared/animaciones/flipinX';
import { SlideAnimation } from '../shared/animaciones/slide';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [flipInXAnimation, fadeAnimation, SlideAnimation],
})
export class PagesComponent {
  mostrarSideUser: boolean | undefined;
  contador: number = 0;
   
  //suscripciones

  showSideUserSuscription: Subscription = new Subscription();

  constructor(
    private variablesGL: VariablesGlService 
  ) {

    this.variablesGL.showSideUser.subscribe(value => { this.mostrarSideUser = value; });
  
  }

  ngOnInit() {

  }
  clickSides($event: Event) {
    $event.preventDefault(); // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo
    $event.stopPropagation();  // Evita la propagación adicional del evento actual en las fases de captura y bubbling

  }

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    if (this.mostrarSideUser && this.contador == 0) {
      this.mostrarSideUser = true;
      this.contador++;
    }
    else if (this.mostrarSideUser && this.contador == 1) { this.emptySides(); }
  }

  emptySides() {
    this.mostrarSideUser = false;
    this.contador = 0;
  }
}
