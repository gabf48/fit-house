import { HomefitComponent } from './homefit.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HomefitComponent],
    imports: [FormsModule,
        RouterModule.forChild([
            { path: '', component: HomefitComponent },
        ])]
})
export class HomefitModule {

}