import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ //liste des composants attaches 
    AppComponent,
    HeaderComponent,
    ListCategoriesComponent,
    FooterComponent,
    HomeComponent
    
  ],
  imports: [//liste des modules a utiliser 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],//services a utiliser 
  bootstrap: [AppComponent]
})
export class AppModule { }
