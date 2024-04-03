import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { MissionListComponent } from './components/mission-list/mission-list.component';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MissionDetailsComponent } from './missiondetails/missiondetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatCardContent,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
