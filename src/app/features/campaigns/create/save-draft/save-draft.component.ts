import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-draft',
  templateUrl: './save-draft.component.html',
  styleUrls: ['./save-draft.component.scss'],
})
export class SaveDraftComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  sendNow(){
    this.router.navigateByUrl('campaigns/create/success');
  }
}
