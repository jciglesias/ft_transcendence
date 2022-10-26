import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  onSignIn() : boolean {
	return this.cookieService.check('token');
  }
  
  onSignOut() {
	//console.log("toto");
	this.cookieService.deleteAll();
  }

  ngOnInit(): void {
  }

}
