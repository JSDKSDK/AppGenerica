import { Component, OnInit } from '@angular/core';
import { VariablesGlService } from 'src/app/services/variables-gl.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(    private variableGL:VariablesGlService) { }

  ngOnInit(): void {
  }
  changeSideUser() {
    this.variableGL.showSideUser.next(true);
  }

}