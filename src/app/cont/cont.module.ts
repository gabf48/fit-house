import { ContComponent } from './cont.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ContComponent],
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ContComponent },
        ])

    ]
})
export class ContModule {}