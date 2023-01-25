import { environment } from './environments/environment';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouterModule, withPreloading } from '@angular/router';
import { AppComponent } from './app/app.component';
import { IonicModule } from '@ionic/angular';
import { routes } from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
}

const providers = [
  provideRouter(routes, withPreloading(PreloadAllModules)),
  importProvidersFrom(
    IonicModule.forRoot({})
  )
];

bootstrapApplication(AppComponent, { providers });
