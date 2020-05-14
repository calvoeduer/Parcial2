import { Component, OnInit} from "@angular/core";
import { Ruta } from "src/app/models/ruta";
import { TiquetService } from "src/app/services/tiquet.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  
} from "@angular/forms";
import { Tiquet } from "src/app/models/tiquet";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { PersonaRegistroComponent } from "../../persona-registro/persona-registro.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-credito-register-compoment",
  templateUrl: "./credito-register-compoment.component.html",
  styleUrls: ["./credito-register-compoment.component.css"],
})
export class CreditoRegisterCompomentComponent implements OnInit {
  creditoGroup: FormGroup;
  rutas: Ruta[];

  constructor(
    private tiquetService: TiquetService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buidForm();
    this.tiquetService.getRutas().subscribe((rutas) => {
      this.rutas = rutas;
    });
  }

  private buidForm() {
    this.creditoGroup = this.formBuilder.group({
      idPersona: ["", [Validators.required, Validators.maxLength(10)]],
      idRuta: [""]
    });
  }

  onSubmit() {
    if (this.creditoGroup.valid) {
      let tiquet: Tiquet = new Tiquet();
      tiquet.personaId = this.creditoGroup.controls['idPersona'].value;
      tiquet.rutaId = this.creditoGroup.controls['idRuta'].value;

      this.tiquetService.saveTiquet(tiquet).subscribe(result => {
        if (result) {
          this.router.navigateByUrl('creditos');
        } else{
          const matRef = this.dialog.open(PersonaRegistroComponent, {
						width: '700px',
						data: this.creditoGroup.controls['idPersona'].value
          });
          
          matRef.afterClosed().subscribe((result) => {
						if (result) {
							this.snackBar.open('Persona ${result.nombre} registrada con éxito.', 'Ok', {
								duration: 3000
							});
						}
					});
        }
      })

    }
  }
}
