import { CommonModule } from '@angular/common';
import { TarifeComponent } from './tarife.component';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TarifeComponent],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: '', component: TarifeComponent },
        ])
    ]
})
export class TarifeModule{}