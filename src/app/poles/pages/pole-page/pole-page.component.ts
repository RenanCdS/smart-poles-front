import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PoleResponse } from 'src/app/core/responses/pole-response';
import { PoleService } from 'src/app/core/services/pole.service';
import { PoleRegisterFormComponent } from '../../components/pole-register-form/pole-register-form.component';

@Component({
  selector: 'app-pole-page',
  templateUrl: './pole-page.component.html',
  styleUrls: ['./pole-page.component.scss']
})
export class PolePageComponent implements OnInit {

  poles: PoleResponse[];
  constructor(private readonly poleService: PoleService, private readonly matDialog: MatDialog) { }

  ngOnInit(): void {
    this.poleService.getPoles().subscribe(poles => {
      this.poles = poles;
    });
  }

  deletePole(poleId: string): void {
    this.poleService.deletePole(poleId).subscribe(() => {
      this.poles = this.poles.filter(pole => pole.id !== poleId)
    }, error => {
      console.log(error);
      alert('ocorreu um erro');
    });
  }

  openRegisterPoleModal(): void {
    this.matDialog.open(PoleRegisterFormComponent);
  }

}
