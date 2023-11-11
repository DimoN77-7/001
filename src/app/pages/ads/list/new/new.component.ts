import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class NewComponent  {
  public showUserMenu = false;

  constructor() {}

  toggleUserMenu(): void {
    this.showUserMenu = !this.showUserMenu;
  }

}
