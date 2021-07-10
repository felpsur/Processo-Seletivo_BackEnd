import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarListComponent } from './car/car-list.component';
import { NavBarComponent} from './nav-bar/nav-bar.component'
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'carros', pathMatch: 'full' 
      },
      {
        path: 'carros', component: CarListComponent
      },
      {
        path: '**', component: Error404Component
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
