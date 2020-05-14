import { Component, OnInit, Inject } from "@angular/core";
import { Persona } from "src/app/models/persona";
import { TiquetService } from "../../services/tiquet.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-persona-registro",
  templateUrl: "./persona-registro.component.html",
  styleUrls: ["./persona-registro.component.css"],
})
export class PersonaRegistroComponent implements OnInit {
  formGroup: FormGroup;
  persona: Persona;
  constructor(
    private tiquetService: TiquetService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PersonaRegistroComponent, Persona>,
		@Inject(MAT_DIALOG_DATA) public personaId: string,
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      identificacion: [
        this.personaId,
        [Validators.required, Validators.maxLength(10)],
      ],
      nombre: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      this.persona.identidicacion = this.formGroup.controls['identificacion'].value;
      this.persona.nombre = this.formGroup.controls['nombre'].value;
      this.tiquetService.savePersona(this.persona).subscribe((result) => {
        if (result) {
          this.dialogRef.close(result);
        }
      });
    }
  }
}
