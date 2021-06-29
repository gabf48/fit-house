import { ArticoleComponent } from './articole.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common'; 

@NgModule({
    declarations: [ArticoleComponent],
    imports: [
        FormsModule,
        CommonModule,
        FontAwesomeModule,
        RouterModule.forChild([
            { path: '', component: ArticoleComponent },
        ])
    ]
})
export class ArticoleModule {}