import { CommonModule } from '@angular/common';
import { AntrenorComponent } from './antrenor.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [AntrenorComponent],
    imports: [ FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: AntrenorComponent},
        ])]
})
export class AntrenorModule{}