import { Component } from '@angular/core';
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent  {

  public selectedCategory = '';
  // to get a page of products, and the second is to change the size of the pages, allowing the number of products that each page contains to be altered. 

  public productsPerPage = 4;
  public selectedPage = 1;

  
  constructor(private repository: ProductRepository) {}
    

  get products(): Product[] {
      let pageIndex = (this.selectedPage - 1) * this.productsPerPage
      return this.repository.getProducts(this.selectedCategory)
          .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
      return this.repository.getCategories();
  }
public Cat:string='';
  changeCategory(Cat:string) {
      this.selectedCategory = Cat;
  }

  changePage(newPage: number) {
      this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
      this.productsPerPage = Number(newSize);
      this.changePage(1);
  }

  get pageCount(): number {
      return Math.ceil(this.repository
          .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

//reemplaza esto POR LA DE ARRIBA DE LA DIRECTIVA   
//get pageNumbers(): number[] {
//      return Array(Math.ceil(this.repository
//          .getProducts(this.selectedCategory).length / this.productsPerPage))
//              .fill(0).map((x, i) => i + 1);
//   }
}