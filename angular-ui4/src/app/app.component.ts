import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-root',
    template: `
    <header>
        <div class="container">
            <h1>Genealogy Viewer</h1>
            [{{test}}]
            <ul class="nav nav-tabs">
            	<li role="presentation" class="active"><a routerLink="/" routerLinkActive="active">Home</a></li>
            	<li role="presentation"><a routerLink="/persons" routerLinkActive="active">People</a></li>
              <li role="presentation"><a routerLink="/places" routerLinkActive="active">Places</a></li>
            	<li role="presentation"><a routerLink="/documents" routerLinkActive="active">Documents</a></li>
            	<li role="presentation"><a routerLink="/options" routerLinkActive="active">Options</a></li>
                
            </ul>
      
        </div>
    
    </header>
    
    
    <div class="container">
        <router-outlet></router-outlet>
    </div> 
  `
})
export class AppComponent {
	@Input() test: string;
	
	constructor()
    {
        console.log('This if the value for user-id: ' + this.test);
    }
}