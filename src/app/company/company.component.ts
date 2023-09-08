import { Component, Input} from '@angular/core';
import {Daum} from "./company.interface";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input() company!: Daum
}



