/**
 * @author Edilion devs, modified by Matt Bezak
 */
import {Component, ViewChild, ViewContainerRef, OnInit} from "@angular/core";
import {ELayoutData} from "./e-layout.data";
import {GenericView} from "../../genericframework/generic.view";
import {EContainerView} from "../../genericframework/generic-container/e-container.view";

@Component({
    selector: 'e-layout',
    directives: [EContainerView],
    template: `
    <div class="e-header-fixed">
        <e-container [component]="data.containers[7].component"></e-container>
    </div>
    <div class="e-container" 
        [class.e-has-header]="data.containers[7].component"
        [class.e-has-footer]="data.containers[8].component">
        
        <div class="e-row">
            <!--<div [class.e-content]="data.containers[0].component">-->
                <e-container [component]="data.containers[0].component"></e-container>
            <!--</div>-->
        </div>
         
        <div class="e-row">
            <e-container [component]="data.containers[2].component"></e-container>
        </div>
        <div class="e-row">
            <div class="e-col-l3">
                 <div [class.e-content]="data.containers[1].component">
                    <e-container [component]="data.containers[1].component"></e-container>
                </div>
            </div>
            <div [ngClass]="{
                'e-col-l6'   : data.getCenterSize() === 2,
                'e-col-l9'   : data.getCenterSize() === 1,
                'e-col-l12'  : data.getCenterSize() === 0
                }">
            
                 <div [class.e-content]="data.containers[3].component">
                     <e-container [component]="data.containers[3].component"></e-container>
                     <e-container [component]="data.containers[6].component"></e-container>
                 </div>
            </div>
            <div class="e-col-l3">
                <div [class.e-content]="data.containers[4].component">
                    <e-container [component]="data.containers[4].component"></e-container>
                </div>
            </div>
        </div>
        <div class="e-row">
            <div [class.e-content]="data.containers[5].component">
                <e-container [component]="data.containers[5].component"></e-container>
            </div>
        </div>
       
        <div class="e-footer-fixed" [hidden]="!data.containers[8].component">
            <e-container [component]="data.containers[8].component"></e-container>
        </div>
    </div>`
})
export class ELayoutView extends GenericView<ELayoutData> {
}