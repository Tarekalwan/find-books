import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'adz-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
      const userLang = window.navigator.language;
      let lang = userLang.split('-')[0];
      lang = lang == 'fr' || lang == 'en' ? lang : 'fr';
      translate.setDefaultLang(lang);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
