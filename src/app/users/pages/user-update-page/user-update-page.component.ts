import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { concat, forkJoin } from 'rxjs';
import { UpdateUserRequest } from 'src/app/core/requests/update-user-request';
import { CondominiumResponse } from 'src/app/core/responses/condominium-response';
import { CondominiumService } from 'src/app/core/services/condominium.service';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user-update-page',
  templateUrl: './user-update-page.component.html',
  styleUrls: ['./user-update-page.component.scss']
})
export class UserUpdatePageComponent implements OnInit {

  form: FormGroup;
  condominiums: CondominiumResponse[];
  constructor(private readonly fb: FormBuilder,
    private readonly condominiumService: CondominiumService,
    private readonly userService: UsersService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      condominium: this.fb.control('', [Validators.required]),
      role: this.fb.control('', [Validators.required]),
    });

    const username = this.activatedRoute.snapshot.paramMap.get('username');
    forkJoin([this.condominiumService.getCondominiums(), this.userService.getUserByUsername(username)])
      .subscribe(([condominiums, user]) => {
        this.condominiums = condominiums;
        this.form.get('name').setValue(user.name);
        this.form.get('condominium').setValue(user.condominium.id);
        this.form.get('role').setValue(user.role);
      });
  }

  updateUser(): void {

    console.log(this.form);
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
      return;
    }

    const updateUserRequest: UpdateUserRequest = {
      condominiumId: this.form.controls.condominium.value,
      name: this.form.controls.name.value,
      role: +this.form.controls.role.value,
    };

    // TODO: Refactor to not reloat the page
    this.userService.updateUser(updateUserRequest).subscribe(() => {
      this.router.navigate(['/usuarios']);
    }, error => {
      alert(error.error.message);
    });
  }

}
