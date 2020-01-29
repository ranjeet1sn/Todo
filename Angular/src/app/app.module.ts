import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component'
import {HttpClientModule} from '@angular/common/http'
import {Routes, RouterModule} from '@angular/router';
const appRoute:Routes=[
{path:"todo",component:TodoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
