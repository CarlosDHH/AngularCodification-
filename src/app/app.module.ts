// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CaesarComponent } from './components/Caesar/Caesar.component';
import { DesComponent } from './components/Des/Des.component';
import { DsaComponent } from './components/Dsa/Dsa.component';
import { ScytaleComponent } from './components/Scytale/Scytale.component';
import { ShaComponent } from './components/Sha/Sha.component';
import { NavbarComponent } from './components/Navbar/Navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CaesarComponent,
    DesComponent,
    DsaComponent,
    ScytaleComponent,
    ShaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
