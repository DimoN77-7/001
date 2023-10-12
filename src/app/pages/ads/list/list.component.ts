import {Component, NgModule} from '@angular/core';
// import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ListRoutingModule} from "./list-routing.module";
import {NewComponent} from "./new/new.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // imports: [NewComponent]
  // imports: [RouterOutlet, RouterLink],
  // standalone: true,
})

export class ListComponent {

}
