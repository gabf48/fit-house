import { CommonModule } from '@angular/common';
import { AbonamentComponent } from './abonament.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AbonamentComponent],
    imports: [ FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: AbonamentComponent},
        ])]
})
export class AbonamentModule{}