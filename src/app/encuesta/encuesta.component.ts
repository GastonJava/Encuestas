import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  cbpreguntas: any;
  seleccionarTodo = false;

  formGroup: FormGroup;
  titleAlert: string = 'Este campo es requerido';
  post: any = '';

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) { 
    this.cbpreguntas = [
      {pregunta: "¿Encuesta para conocer la satisfacción de estudiantes?", checked: false},
      {pregunta: "¿Encuesta para conocer artistas y estilo de musica mas populares?", checked: false},
      
    ]
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  // Actualizar checks
  actualizarCheck(){
    console.log(this.seleccionarTodo);
    if(this.seleccionarTodo === true){
      this.cbpreguntas.map((pregunta) => {
        pregunta.checked = true;
      })
    }else {
      this.cbpreguntas.map((pregunta) => {
        pregunta.checked = false;
      });
    }
  }
  
  crearFormulario() {
    this.formGroup = this.formBuilder.group({
      'cbpregunta1': [null],
      'cbpregunta2': [null],
      'inputpregunta3': [null],
      'inputpregunta4': [null],
      'inputpregunta5': [null],
      'inputpregunta6': [null],
      'validate': ''
    });
  }

  //mensaje enviado
  openSnackBar() {  
    this._snackBar.open('Encuesta Enviada Correctamente', 'Gracias', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  enviarPost(post: any){
    this.post = post;
  }

}