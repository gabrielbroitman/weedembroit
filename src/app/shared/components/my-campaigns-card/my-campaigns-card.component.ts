import { Component, OnInit, Input } from '@angular/core';
import { CampaignInterface } from 'src/app/core/interfaces/campaign.interface';

@Component({
  selector: 'app-my-campaigns-card',
  templateUrl: './my-campaigns-card.component.html',
  styleUrls: ['./my-campaigns-card.component.scss'],
})
export class MyCampaignsCardComponent implements OnInit {
  @Input() campaign: CampaignInterface;

  constructor() { }

  ngOnInit() {}

}
