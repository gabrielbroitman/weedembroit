import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() url: string;
  @Input() showCancel = false;
  @Input() showIconLeft = false;
  @Input() showLogo = true;
  @Input() showMenu = true;

  constructor(private routers: Router) { }

  ngOnInit() {}

  router(){
    this.routers.navigateByUrl(this.url);
  }

}
