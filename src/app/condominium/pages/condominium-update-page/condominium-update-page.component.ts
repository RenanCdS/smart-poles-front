import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCondominiumRequest } from 'src/app/core/requests/update-condominium-request';
import { CondominiumService } from 'src/app/core/services/condominium.service';

@Component({
  selector: 'app-condominium-update-page',
  templateUrl: './condominium-update-page.component.html',
  styleUrls: ['./condominium-update-page.component.scss']
})
export class CondominiumUpdatePageComponent implements OnInit {

  form: FormGroup;
  constructor(private readonly fb: FormBuilder,
    private readonly condominiumService: CondominiumService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      city: this.fb.control('', [Validators.required]),
    });

    const condominiumId = this.getCondominiumId();

    this.condominiumService.getCondominiumById(condominiumId).subscribe(condominium => {
      this.form.get('name').setValue(condominium.name);
      this.form.get('city').setValue(condominium.city);
    });
  }

  updateCondominium(): void {
    console.log(this.form);
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    }
    const updateCondominiumRequest: UpdateCondominiumRequest = {
      name: this.form.get('name').value,
      city: this.form.get('city').value,
      id: this.getCondominiumId()
    };

    this.condominiumService.updateCondominium(updateCondominiumRequest).subscribe(() => {
      this.router.navigate(['/condominios']);
    }, error => alert(error.error.message));
  }

  private getCondominiumId(): string {
    return this.activatedRoute.snapshot.paramMap.get('id');;
  }
}
