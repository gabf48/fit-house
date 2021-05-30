import { ContNouComponent } from './cont-nou.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ContNouComponent],
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ContNouComponent },
        ])
    ]
})
export class ContNouModule {}