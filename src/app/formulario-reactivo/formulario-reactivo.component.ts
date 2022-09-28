import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.scss']
})
export class FormularioReactivoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      username: ["Camilo", [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
      email: ["", [Validators.required, Validators.email]],
    })
  }

  onSubmit(data) {
    console.log(data.value)
  }

}
