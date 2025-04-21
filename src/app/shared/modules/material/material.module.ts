import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'

@NgModule({
    declarations: [],
	imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
	exports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
	
})
export class MaterialModule {}
