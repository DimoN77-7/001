import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  public showUserMenu = false;
  public username = 'Коля';
  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }
  logOut() {
    console.log('Я хочу разлогиниться!!! Выыпустиии!!!');
  }
}
