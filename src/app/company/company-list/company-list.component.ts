import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companys: any;

  constructor() { }

  ngOnInit() {
    this.companys= [
      {
        "code": "A01",
        "name": "eClerx"
      },{
        "code": "A02",
        "name": "Softenger"
      }
    ];
  }

}
