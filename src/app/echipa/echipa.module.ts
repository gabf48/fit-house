import { CommonModule } from '@angular/common';

import { EchipaComponent } from './echipa.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [EchipaComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: EchipaComponent },
        ])
    ],
    exports: []
})

export class EchipaModule { }