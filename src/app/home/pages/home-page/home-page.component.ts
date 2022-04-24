import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import { PoleResponse } from 'src/app/core/responses/pole-response';
import { CondominiumService } from 'src/app/core/services/condominium.service';
import { PoleService } from 'src/app/core/services/pole.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  poles: PoleResponse[];
  condominiumName = '';
  constructor(private readonly poleService: PoleService,
    private readonly condominiumService: CondominiumService,
    private readonly sessionService: SessionService) { }

  ngOnInit(): void {
    const condominiumId = this.sessionService.getClaim('CondominiumId');
    this.poleService.getPoleByCondominiumId(condominiumId).subscribe(poles => {
      this.poles = poles;
    });

    this.condominiumService.getCondominiumById(condominiumId).subscribe(condominium => {
      this.condominiumName = condominium.name;
    });
  }

}
