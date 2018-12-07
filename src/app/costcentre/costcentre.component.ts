import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-costcentre',
  templateUrl: './costcentre.component.html',
  styleUrls: ['./costcentre.component.css']
})
export class CostcentreComponent implements OnInit {

  displayedColumns = ['code','description','parentcode','headeronly'];
  datasource1 = new MatTableDataSource<costcentre>();
  items: any;

  ctrCostCtr : number;

  @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log("Attempt to contact api....");
    this.http.get('http://127.0.0.1:5000/api/costcentre').subscribe(
      data => {
        console.log('ok!');
        this.items = data;
        this.datasource1.data = this.items;
        this.ctrCostCtr = this.items.length;
      }
    );
  }

  ngAfterViewInit(){
    this.datasource1.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.datasource1.filter = filterValue;
  }  

  viewCC(id){
    console.log(id);
  }
}

export interface costcentre {
  code: string;
  description: string;
  parentcode: string;
  headeronly: number;
}