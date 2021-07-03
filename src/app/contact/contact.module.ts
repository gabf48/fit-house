import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ContactComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ContactComponent },
        ])
    ],
    exports: []
})

export class ContactModule { }