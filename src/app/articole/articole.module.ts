import { ArticoleComponent } from './articole.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ArticoleComponent],
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ArticoleComponent },
        ])
    ]
})
export class ArticoleModule {}