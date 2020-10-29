import { Component, OnInit } from '@angular/core';
import Degree from 'src/app/Degree';
//import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

 educational: Degree[]= [
    {degree:"BA", specialization:"FILM", school:"IGNOU", year:2000, percentage:70, fulltime:"FULL"}
  ];

  constructor() { }

  ngOnInit(): void {
   // this.educational = this.routes.snapshot.params.educational;
  }

}
