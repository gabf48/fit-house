import { AntrenorComponent } from './antrenor.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AntrenorComponent],
    imports: [ FormsModule,
        RouterModule.forChild([
            { path: '', component: AntrenorComponent},
        ])]
})
export class AntrenorModule{}