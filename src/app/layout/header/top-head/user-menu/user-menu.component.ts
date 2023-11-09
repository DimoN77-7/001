import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})


export class UserMenuComponent implements OnInit{
  @Input() name1:string ;
  public showUserMenu = false;

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  ngOnInit(): void {}

  onLogin(){
  }


  logOut() {
    // this.isLoggedIn = false;

  }
}
