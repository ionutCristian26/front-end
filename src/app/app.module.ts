import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { LogOutComponent } from './pages/authentication/log-out/log-out.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NgxDatesPickerModule } from 'ngx-dates-picker';
import {TableHeaderComponent} from './components/table-header/table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    TableComponent,
    LogOutComponent,
    NotFoundComponent,
    SearchComponent,
    FiltersComponent,
    TableHeaderComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        NgbModule,
        NgbPaginationModule,
        FormsModule,
        NgxDatesPickerModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
