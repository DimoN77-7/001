import {Component, NgModule} from '@angular/core';
// import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ListRoutingModule} from "./list-routing.module";
import {NewComponent} from "./new/new.component";
import {provideRouter, RouterLink, RouterOutlet} from "@angular/router";
import {bootstrapApplication} from "@angular/platform-browser";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  /* В лекции при добавлении <router-outlet></router-outlet> в list.component.HTML долбавляем сюда
  * imports: [RouterOutlet, RouterLink] но это при standAlone*/
  // imports: [RouterOutlet, RouterLink],
  // standalone: true,
})

export class ListComponent {

}

