import { Component, OnInit } from '@angular/core';
import { CondominiumResponse } from 'src/app/core/responses/condominium-response';
import { CondominiumService } from 'src/app/core/services/condominium.service';

@Component({
  selector: 'app-condominium-page',
  templateUrl: './condominium-page.component.html',
  styleUrls: ['./condominium-page.component.scss']
})
export class CondominiumPageComponent implements OnInit {

  condominiums: CondominiumResponse[];
  constructor(private readonly condominiumService: CondominiumService) { }

  ngOnInit(): void {
    this.condominiumService.getCondominiums().subscribe((condominiums) => {
      this.condominiums = condominiums;
    });
  }

  deleteCondominium(condominiumId: string): void {
    this.condominiumService.deleteCondominium(condominiumId).subscribe(() => {
      this.condominiums = this.condominiums.filter(condominium => condominium.id !== condominiumId);
    })
  }

}
