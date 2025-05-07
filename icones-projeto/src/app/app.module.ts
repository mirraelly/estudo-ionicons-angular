import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIconsModule } from '@ng-icons/core';
import * as icons from './icons';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgIconsModule.withIcons({ ...icons }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
