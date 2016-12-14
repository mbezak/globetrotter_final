/** @author Cristiana Man */
import {Component} from "@angular/core";
import {GenericView} from "../../genericframework/generic.view";
import {ESwiperData} from "./e-swiper.data";
import {EContainerView} from "../../genericframework/generic-container/e-container.view";

@Component({
    directives: [EContainerView],
    template: `
        <div class="e-swiper">
            <div *ngFor="let container of data.containers; let index = index" [hidden]="!container.active">
                
                <div (swipeleft)="swipe(index, $event.type)" (swiperight)="swipe(index, $event.type)" class="e-swiper-container">
                    <e-container [component]="container.component"></e-container>
                </div>
            </div>
        </div>
    `
})
export class ESwiperView extends GenericView<ESwiperData> {

    // action triggered when user swipes
    swipe(index: number, action) {
        if (this.isOutOfRange(index)) return;

        // next index is previous/next depending on the swipe direction
        let nextIndex = (action === 'swipeleft') ? index + 1 : index - 1;

        // if it is out of range navigate to a set page
        if (this.isOutOfRange(nextIndex)) {
            this.onActionClicked();
            return;
        }

        // toggle container visibility
        this.data.containers.forEach((container, index) => container.active = (index === nextIndex));
    }

    isOutOfRange(index : number) : boolean {
        return index > this.data.containers.length || index < 0;
    }
}
