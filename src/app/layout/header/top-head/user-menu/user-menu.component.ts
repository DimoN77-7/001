import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExitAccService} from "../../../../service/exit-acc.service";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})

export class UserMenuComponent implements OnInit {
  @Input() isLogined: boolean;
  @Input() name1: string;
  public showUserMenu = false;
  private Showlogin = true;

  constructor(private exitAcc: ExitAccService) {
    if (this.Showlogin !== false) {
    }
  }

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

  ngOnInit(): void {
  }


  logOut(): void {
    this.exitAcc.exitLog()
  }


}
