import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss']
})
export class ContainerPageComponent implements OnInit {

  constructor(private readonly sessionService: SessionService,
    private readonly router: Router) { }

  isAdmin = false;
  ngOnInit(): void {
    this.isAdmin = this.sessionService.isAdmin();
  }

  logout(): void {
    this.sessionService.clearToken();
    this.router.navigate(['/login']);
  }

}
