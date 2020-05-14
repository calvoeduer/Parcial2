import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from '../../services/persona.service';

import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {

  formGroup : FormGroup;
  persona : Persona;
  constructor(private personaService:PersonaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  } 

   private buildForm() {
          this.formGroup = this.formBuilder.group({ });
  }

  
    

}
