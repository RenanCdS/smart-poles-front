import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationRequest } from 'src/app/core/requests/authentication-request';
import { AuthenticationResponse } from 'src/app/core/responses/authentication-response';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private readonly fb: FormBuilder,
    private readonly authenticationService: AuthenticationService,
    private readonly sessionService: SessionService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      this.loginForm.updateValueAndValidity();
      return;
    }

    const authenticationRequest: AuthenticationRequest = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    this.authenticationService.login(authenticationRequest).pipe(
      catchError(() => {
        alert('e-mail ou senha inválidos.');
        return EMPTY;
      }),
      map((authenticationResponse: AuthenticationResponse) => {
        return authenticationResponse.token;
      })
    ).subscribe({
      next: token => {
        this.sessionService.saveToken(token);
        this.router.navigate(['/home']);
      },
      complete: () => {
        this.loginForm.reset();
        this.loginForm.updateValueAndValidity();
      }
    });
  }
}
