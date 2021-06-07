import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { ClientesService} from '../../services/clientes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  createContactanosForm: FormGroup
  
  constructor(

    private formBuilder: FormBuilder,
    private clientesService: ClientesService,
    private router : Router,

  ) { 
    this.createContactanosForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email] ],
      number: ['', Validators.required],
      city: ['', Validators.required]
    })
  // this.validator()
  } 

  ngOnInit(): void {
  }

  validator(){
    this.createContactanosForm = this.formBuilder.group({
      name: ['Digita tu nombre', Validators.required],
      email: ['Digita tu email', [Validators.required, Validators.email] ],
      number: ['Digita tu celular', Validators.required],
      city: ['Digita tu ciudad', Validators.required]
    })
  }

  sendData(){
    if (this.createContactanosForm.valid){
      this.clientesService.create(this.createContactanosForm.value).subscribe(
        (clientesCreated)=>{
          alert('datos ingresados con exito')
          this.router.navigate(['/home'])
        },
        (error)=>{
          alert ('error al ingresar los datos')
        }
      )
    }else{
      alert('por favor ingresa todos los datos')
    }
  }

}
