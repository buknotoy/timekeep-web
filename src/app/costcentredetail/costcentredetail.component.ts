import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-costcentredetail',
  templateUrl: './costcentredetail.component.html',
  styleUrls: ['./costcentredetail.component.css']
})
export class CostcentredetailComponent implements OnInit {
  ccID$ : number;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    this.ccID$ = this.route.snapshot.params.id;
  }

}
