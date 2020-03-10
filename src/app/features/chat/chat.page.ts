import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.page.html',
	styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

	constructor(
		public userService: UserService,
		private router: Router,
	) { }

	ngOnInit() { }

	search(e: any) {
		console.log(e.value);
	}

	openChat() {
		this.router.navigate(['/chat']);
	}

	action() {

	}

	send() {
		
	}

}