import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.cdr.detectChanges()
    this.router.navigate(['login']);
  }

}


