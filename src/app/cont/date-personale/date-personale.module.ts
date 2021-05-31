
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePersonaleComponent } from "./date-personale.component";

@NgModule({
    declarations: [DatePersonaleComponent],
    imports: [FormsModule,
        RouterModule.forChild([
            { path: '', component: DatePersonaleComponent },
        ])]
})
export class DatePersonaleModule {

}