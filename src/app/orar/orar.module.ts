import { OrarComponent } from './orar.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [OrarComponent],
    imports: [  FormsModule,
        RouterModule.forChild([
            { path: '', component: OrarComponent },
        ])]
})
export class OrarModule {}