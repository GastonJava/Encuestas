import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatSnackBar, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { EncuestaComponent } from './encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [MatDatepickerModule,
    MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
