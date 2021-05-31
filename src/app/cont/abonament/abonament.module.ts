import { AbonamentComponent } from './abonament.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AbonamentComponent],
    imports: [
        FormsModule,
        RouterModule.forChild([
            { path: '', component: AbonamentComponent},
        ])]
})
export class AbonamentModule {}