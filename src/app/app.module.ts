import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ImportCSVComponent } from './import-csv/import-csv.component';
import { ExportCSVComponent } from './export-csv/export-csv.component';
import { VerificareCSVComponent } from './verificare-csv/verificare-csv.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    ImportCSVComponent,
    ExportCSVComponent,
    VerificareCSVComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    ScrollingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
