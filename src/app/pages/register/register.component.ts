import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true
})
export class RegisterComponent {
  public form: FormGroup = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });
}
