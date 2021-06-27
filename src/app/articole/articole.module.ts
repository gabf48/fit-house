import { ArticoleComponent } from './articole.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [ArticoleComponent],
    imports: [
        FormsModule,
        FontAwesomeModule,
        RouterModule.forChild([
            { path: '', component: ArticoleComponent },
        ])
    ]
})
export class ArticoleModule {}