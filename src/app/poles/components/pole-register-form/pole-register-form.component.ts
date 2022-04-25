import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPoleRequest } from 'src/app/core/requests/register-pole-request';
import { CondominiumResponse } from 'src/app/core/responses/condominium-response';
import { CondominiumService } from 'src/app/core/services/condominium.service';
import { PoleService } from 'src/app/core/services/pole.service';

@Component({
  selector: 'app-pole-register-form',
  templateUrl: './pole-register-form.component.html',
  styleUrls: ['./pole-register-form.component.scss']
})
export class PoleRegisterFormComponent implements OnInit {

  form: FormGroup;
  condominiums: CondominiumResponse[];
  constructor(private readonly fb: FormBuilder,
    private readonly poleService: PoleService,
    private readonly condominiumService: CondominiumService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      isGateway: this.fb.control('', [Validators.required]),
      condominium: this.fb.control('', [Validators.required])
    });

    this.condominiumService.getCondominiums().subscribe(condominiums => {
      this.condominiums = condominiums;
    });
  }

  registerPole(): void {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    }

    const poleRegisterRequest: RegisterPoleRequest = {
      condominiumId: this.form.controls.condominium.value,
      isGateway: this.form.controls.isGateway.value
    };

    // TODO: Refactor to not reloat the page
    this.poleService.addPole(poleRegisterRequest).subscribe(() => {
      window.location.reload();
    }, error => {
      alert(error.error.message);
    });
  }

}
