import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCondominiumRequest } from 'src/app/core/requests/register-condominium-request';
import { CondominiumService } from 'src/app/core/services/condominium.service';

@Component({
  selector: 'app-condominium-register-page',
  templateUrl: './condominium-register-page.component.html',
  styleUrls: ['./condominium-register-page.component.scss']
})
export class CondominiumRegisterPageComponent implements OnInit {

  form: FormGroup;
  constructor(private readonly fb: FormBuilder,
    private readonly condominiumService: CondominiumService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
    });
  }

  registerCondominium(): void {
    console.log(this.form);
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    }

    const registerUserRequest: RegisterCondominiumRequest = {
      name: this.form.controls.name.value,
      city: this.form.controls.city.value,
    };

    // TODO: Refactor to not reloat the page
    this.condominiumService.registerCondominium(registerUserRequest).subscribe(() => {
      this.router.navigate(['/condominios']);
    }, error => {
      alert(error.error.message);
    });
  }

}
