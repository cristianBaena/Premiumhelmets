import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryService} from '../../services/category.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  createCategoryForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router : Router

  ) {
    this.createCategoryForm = this.formBuilder.group({
      gama: ['', Validators.required],
      material: [''],
      uso: ['', Validators.required],
      
    })
    //this.validator()
  }

  ngOnInit(): void {
  }

  validator() {
    this.createCategoryForm = this.formBuilder.group({
      gama: ['', Validators.required],
      material: [''],
      uso: ['', Validators.required]
    })
  }
  createCategory(){
    if (this.createCategoryForm.valid){
      this.categoryService.create(this.createCategoryForm.value).subscribe(
        (categoryCreated)=>{
          alert('categoria creada')
          this.router.navigate(['/home'])
        },
        (error)=>{
          alert ('error al crear la categoria')
        }
      )
    }else{
      alert('No se envió la información')
    }
  }

}
