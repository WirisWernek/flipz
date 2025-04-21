import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { MaterialModule } from '../../../../shared/modules/material/material.module'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [MaterialModule, FormsModule, ReactiveFormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
    senha = true

    form: FormGroup = new FormGroup({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    })

    avancar() {
        if (this.form.controls['email'].valid) {
            this.senha = false
        }
    }

    login() {}
}
