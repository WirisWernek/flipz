import { Component, inject, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FlashCardApi } from '@api/flash-card.api'
import { FlashCardModel } from '@models/flash-card.model'
import { MaterialModule } from '@shared/modules/material/material.module'
import { SharedModule } from '@shared/modules/shared/shared.module'
import { BehaviorSubject, Observable } from 'rxjs'

@Component({
    selector: 'app-list-flash-card',
    imports: [MaterialModule, SharedModule],
    templateUrl: './list-flash-card.component.html',
    styleUrl: './list-flash-card.component.scss',
})
export class ListFlashCardComponent implements OnInit {
    private api = inject(FlashCardApi)
    private activatedRoute = inject(ActivatedRoute)
    flashCards$!: Observable<FlashCardModel[]>

    ngOnInit() {
        const flashCards = this.activatedRoute.snapshot.data['flashCards'] as FlashCardModel[]

        if (flashCards) {
            this.flashCards$ = new BehaviorSubject(flashCards)
        } else {
            this.flashCards$ = this.api.get()
        }
    }
}
