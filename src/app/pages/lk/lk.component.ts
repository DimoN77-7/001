import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {AccountService} from "../../service/account.service";

@Component({
  selector: 'app-lk',
  templateUrl: './lk.component.html',
  styleUrls: ['./lk.component.scss'],
  // standalone: true,
})

export class LkComponent implements OnInit {
  constructor(private accoService: AccountService) {

  }


  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
    this.accoService.getCustomers().subscribe((res: any) => {
      debugger
    })
  }
}
