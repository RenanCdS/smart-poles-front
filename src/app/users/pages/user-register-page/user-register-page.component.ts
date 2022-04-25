import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserRequest } from 'src/app/core/requests/register-user-request';
import { CondominiumResponse } from 'src/app/core/responses/condominium-response';
import { CondominiumService } from 'src/app/core/services/condominium.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-register-page',
  templateUrl: './user-register-page.component.html',
  styleUrls: ['./user-register-page.component.scss']
})
export class UserRegisterPageComponent implements OnInit {

  form: FormGroup;
  condominiums: CondominiumResponse[];
  constructor(private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly userService: UsersService,
    private readonly condominiumService: CondominiumService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      condominium: this.fb.control('', [Validators.required]),
      role: this.fb.control('', [Validators.required]),
    });

    this.condominiumService.getCondominiums().subscribe(condominiums => {
      this.condominiums = condominiums;
    });
  }

  registerUser(): void {
    console.log(this.form);
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    }

    const registerUserRequest: RegisterUserRequest = {
      condominiumId: this.form.controls.condominium.value,
      username: this.form.controls.username.value,
      password: this.form.controls.password.value,
      name: this.form.controls.name.value,
      role: +this.form.controls.role.value,
    };

    // TODO: Refactor to not reloat the page
    this.userService.registerUser(registerUserRequest).subscribe(() => {
      this.router.navigate(['/usuarios']);
    }, error => {
      alert(error.error.message);
    });
  }

}
