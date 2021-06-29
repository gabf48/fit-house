import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CalculatorComponent],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: '', component: CalculatorComponent },
        ])
    ]
})
export class CalculatorModule {}