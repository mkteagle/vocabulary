import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VocabService } from '../../_services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private error: any;
  names: any;
  selectedName: string = null;

  constructor(private vocabService: VocabService, private router: Router) { }

  ngOnInit() {
    this.vocabService.getNames().then(response => {
      this.names = response;
      console.log(this.names);
    }).catch(this.error);
  }
  welcome() {
    let param = '';
    this.names.map(entry => {
      if (entry.name === this.selectedName) {
        param = entry.param;
      }
    })
    this.router.navigate(['/student', param]);
  }
  public createParam(title) {
    title = title.replace(/\s+/g, '-').replace(/,/g, '').replace(/&/g, 'and').replace(/:/g, '');
    title = title.replace(/[^\-\w\s]/gi, '').toLowerCase();
    return title;
  }
}
