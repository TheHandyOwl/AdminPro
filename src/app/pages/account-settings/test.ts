import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
 selector: 'app-account-settings',
 templateUrl: './account-settings.component.html',
 styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
 constructor( @Inject( DOCUMENT ) private _document, private renderer: Renderer2 ) { }
 ngOnInit() {
 }
 changeTheme( theme: string, link: ElementRef ) {
   const url = `assets/css/colors/${theme}.css`;
   this._document.getElementById('theme').setAttribute('href', url);
   this.applyCheck( link );
 }
 private applyCheck( link: ElementRef ) {
   const selectors = this._document.getElementsByClassName('selector');
   for (const ref of selectors) {
     ref.classList.remove('working');
   }
   this.renderer.addClass( link, 'working' );
 }
}
