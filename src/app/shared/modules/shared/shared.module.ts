import { AsyncPipe, CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [],
    imports: [CommonModule, AsyncPipe, FormsModule, ReactiveFormsModule],
    exports: [CommonModule, AsyncPipe, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
