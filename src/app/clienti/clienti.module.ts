import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClientiComponent } from "./clienti.component";

@NgModule( {
    declarations: [ClientiComponent],
    imports: [ FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ClientiComponent },
        ])]
})
export class ClinetiModule {}