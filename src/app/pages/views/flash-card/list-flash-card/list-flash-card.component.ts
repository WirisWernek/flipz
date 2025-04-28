import { Component, inject, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { FlashCardApi } from '../../../../core/api/flash-card.api'
import { FlashCardModel } from '../../../../core/models/flash-card.model'
import { MaterialModule } from '../../../../shared/modules/material/material.module'
import { SharedModule } from '../../../../shared/modules/shared/shared.module'

@Component({
    selector: 'app-list-flash-card',
    imports: [MaterialModule, SharedModule],
    templateUrl: './list-flash-card.component.html',
    styleUrl: './list-flash-card.component.scss',
})
export class ListFlashCardComponent implements OnInit {
    private api = inject(FlashCardApi)
    flashCards$!: Observable<FlashCardModel[]>

    ngOnInit() {
        this.flashCards$ = this.api.get()
    }
}
