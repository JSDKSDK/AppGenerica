import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[];
  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    this.menus = [
      {
        name: 'Catálogos',
        iconClass: 'fa fa-list',
        active: false,
        url: null,
        submenu: [
          { name: 'uno para prueba', url: '/' },
          { name: 'uno', url: '/dashboard' },
          { name: 'uno', url: '/' },
          { name: 'uno', url: '/' },
          { name: 'uno', url: '/' },
          { name: 'uno', url: '/' },
          { name: 'uno', url: '/' },
         
        ]
      },
      {
        name: 'Servidores',
        iconClass: 'fa fa-server',
        active: false,
        url: null,
        submenu: [
          { name: 'Servers', url: '/' }
        ]
      },
      {
        name: 'Account',
        iconClass: 'fa fa-file-user',
        active: false,
        url: "/",
        submenu: [

        ]
      }
    ];
  }

  toggle(index: number) {
    this.menus.filter(
      (menu, i) => i !== index && menu.active
    ).forEach(menu => menu.active = !menu.active);

    this.menus[index].active = !this.menus[index].active;
  }

  goTo(path: string) {

    if (path) {
      this.router.navigate([path]);
      console.log(path);
    }
  }
}

export interface Menu {
  name: string,
  iconClass: string,
  active: boolean,
  url: string,
  submenu: { name: string, url: string }[]
}
