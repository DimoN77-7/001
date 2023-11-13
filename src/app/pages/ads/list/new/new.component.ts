import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SwaggerService} from "../../../../service/swagger.service";
import {FormsModule} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {API_BASE} from "../../../../../main";


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  imports: [CommonModule,FormsModule],
  standalone: true
})
export class NewComponent  {
  public  newAddObj: any = {
    name : '',
    description: '',
    images: '',
    cost: '',
    email: '',
    phone: '',
    location: '',
    // categoryId: '',
  };

  public  newAddObj1 = new FormData();


  constructor(private swagger:SwaggerService,  private http: HttpClient) {
    // this.newAddObj1.forEach(el => console.log);
  }

  createNewAdd() {
    // this.newAddObj1.get(this.newAddObj.name)
    // this.newAddObj1.append('name', this.newAddObj.name);
    // this.newAddObj1.append( 'description', this.newAddObj.description);
    // this.newAddObj1.append("images", this.newAddObj.images);
    // this.newAddObj1.append("email", this.newAddObj.email);
    // this.newAddObj1.append("phone", this.newAddObj.phone);
    // this.newAddObj1.append("location", this.newAddObj.location);
    // this.newAddObj1.append("categoryId", this.newAddObj.categoryId);
    // console.log(this.newAddObj1)
    this.swagger.createAdvert(this.newAddObj).subscribe((res)=> console.log(res))

    this.newAddObj1.forEach(el => console.log(el));
    // this.swagger.createAdvert(this.newAddObj).subscribe((res)=> console.log(res))

    }


  // }



}
