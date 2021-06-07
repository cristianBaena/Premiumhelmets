import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Category} from '../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL: String = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  create(formData: any){
    return this.http.post<Category>(`${this.apiURL}/category/create`, formData)

  }

}
