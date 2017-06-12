import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SkillsPage } from '../pages/skills/skills';
import { CVPage } from '../pages/cv/cv';
import { POPPage } from '../pages/pop/pop';
import { AboutMePage } from '../pages/aboutme/aboutme';
import { VoortgangPage } from '../pages/voortgang/voortgang';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SkillsPage,
    CVPage,
    POPPage,
    AboutMePage,
    VoortgangPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SkillsPage,
    CVPage,
    POPPage,
    AboutMePage,
    VoortgangPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
