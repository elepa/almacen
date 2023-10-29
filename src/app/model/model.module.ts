import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSourceService } from "./static-data-source.service";

@NgModule({
providers: [ProductRepository,
            StaticDataSourceService]
}) 

export class ModelModule { }
