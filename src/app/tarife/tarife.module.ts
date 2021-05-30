import { TarifeComponent } from './tarife.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [TarifeComponent],
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: TarifeComponent },
        ])
    ]
})
export class TarifeModule{}