import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'Este campo es requerido';
  post: any = '';
 
  // RADIO list
  generolist: any = [
    {
      value: 1,
      nombre: 'Femenino'
    },
    {
      value: 2,
      nombre: 'Masculino'
    },
    
  ];

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.crearFormulario();
    this.setChangeValidate();
  }

  crearFormulario() {
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.email], this.checkInUseEmail],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'direccion': [null, [Validators.required, Validators.maxLength(25)]],
      'date': [null, [Validators.required]],
      'genero': [null],
      'validate': ''
    });
  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "necesitas especificar al menos 3 caracteres";
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    )
  }

  //getting data from inputs
  get mail () {
    return this.formGroup.get('email') as FormControl;
  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }

  get contraseña() {
    return this.formGroup.get('password') as FormControl;
  }

  get direccion() {
    return this.formGroup.get('direccion') as FormControl;
  }

  get fecha() {
    return this.formGroup.get('date') as FormControl;
  }

  get genero() {
    return this.formGroup.get('genero') as FormControl;
  }

  checkPassword(control) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkInUseEmail(control) {
    // simular acceso a la database
    let db = ['gaston@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }

  getErrorEmail() {
    return this.formGroup.get('email').hasError('required') ? 'Campo Requerido' :
      this.formGroup.get('email').hasError('pattern') ? 'Email invalido' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'Este Email ya esta en uso' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Campo Requerido (al menos 8 caracteres, una letra mayuscula y un numero)' :
      this.formGroup.get('password').hasError('requirements') ? 'Contraseña tiene que tener al menos 8 caracteres, una letra mayuscula y un numero' : '';
  }

  onSubmit(post) {
    this.post = post;
    console.log(this.formGroup.value);
  }

}