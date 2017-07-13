import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, AlertService } from '../../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  returnUrl = '';
  loading = false;

  constructor(private authenticationService: AuthenticationService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
  }

  login() {
    // this.loading = true;
    this.authenticationService.login(this.email, this.password)
      .subscribe(
        data => {
          this.router.navigate(['/admin']);
        },
        error => {
          this.alertService.error(error._body);
          // this.loading = false;
        });
  }
}
