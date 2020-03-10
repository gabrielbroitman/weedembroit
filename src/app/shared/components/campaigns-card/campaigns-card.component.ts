import { CampaignInterface } from './../../../core/interfaces/campaign.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campaigns-card',
  templateUrl: './campaigns-card.component.html',
  styleUrls: ['./campaigns-card.component.scss'],
})
export class CampaignsCardComponent implements OnInit {

  @Input() campaign: CampaignInterface;
  
  constructor() { }

  ngOnInit() {}

}
