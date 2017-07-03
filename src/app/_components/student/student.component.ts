import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { VocabService } from '../../_services/index';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: any;
  sub: any;
  students: any;
  
  constructor(private route: ActivatedRoute, private vocabService: VocabService) { }
  getStudents() {
    this.vocabService.getNames().then(response => {
      this.students = response;
      this.sub = this.route.params.subscribe(params => {
       this.students.map(entry => {
         if (entry.param === params['name']) {
           this.student = entry.name;
         }
       })
    });
    })
  }
  ngOnInit() {
    this.getStudents();
  }

}
