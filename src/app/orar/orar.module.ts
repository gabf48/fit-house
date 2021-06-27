import { OrarComponent } from './orar.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [OrarComponent],
    imports: [  FormsModule,
        FontAwesomeModule,
        RouterModule.forChild([
            { path: '', component: OrarComponent },
        ])]
})
export class OrarModule {}