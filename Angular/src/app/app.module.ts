import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee/employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [EmployeeService,
    { provide: MatSnackBarConfig, useValue: { duration: 3000 } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
