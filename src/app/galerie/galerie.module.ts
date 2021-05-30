import { GalerieComponent } from './galerie.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [GalerieComponent],
    imports: [FormsModule,
        RouterModule.forChild([
            { path: '', component: GalerieComponent },
        ])]
})
export class GalerieModule {}