import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // imports: [RouterOutlet,RouterLink],
  // standalone: true
})
export class HeaderComponent {

}
// import {Component, OnInit} from '@angular/core';
//
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit{
//
//   constructor() {
//   }
//
//   ngOnInit(): void {
//   }
//
// }
