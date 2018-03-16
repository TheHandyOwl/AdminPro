import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) { }

  ngOnInit() {
    this.settingCheckIntoThemeSelected();
  }

  changeColor(theme: string, link: any) {
    console.log(link);

    this.applyCheckIntoThemeSelected( link );
    this._settings.applyTheme( theme );
  }

  applyCheckIntoThemeSelected( link: any ) {
    const selectors: any = document.getElementsByClassName('selector');
    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  settingCheckIntoThemeSelected () {
    const selectors: any = document.getElementsByClassName('selector');
    const theme = this._settings.settings.theme;

    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
