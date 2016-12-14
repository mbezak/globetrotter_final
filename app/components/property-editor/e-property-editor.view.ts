import {Component}  from '@angular/core';
import { EPropertyEditorData } from "./e-property-editor.data";
import {GenericView} from "../generic.view";

@Component({
    selector: 'e-property-editor',
    template: `
     <div class="e-property-editor" [class.e-horizontal]="data.options.isHorizontal">
        <div *ngFor="let field of data.fields" class="property-group">


            <label class="e-property-label">{{field.label}}</label>  
            <div *ngIf="field.help && !data.options.isHorizontal" class="e-dropdown-panel">
                <div class="dropdown">
                    <i class="fa fa-info-circle"></i>
                    <div class="dropdown-content">
                        {{field.help}}
                    </div>
                </div>
            </div>
            
            <div [ngSwitch]="field.type" class="e-property">
                <input *ngSwitchCase="'text'"   type="text"      [(ngModel)]="field.value" [id]="field.id" [disabled]="field.isDisabled" />
                <input *ngSwitchCase="'number'" type="number"    [(ngModel)]="field.value" [id]="field.id" [disabled]="field.isDisabled" /> 
                                           
                <div *ngSwitchCase="'boolean'" class="e-property-checkbox">                    
                    <label class="control e-checkbox">
                        <input [(ngModel)]="field.value" [id]="field.id" type="checkbox" [disabled]="field.isDisabled" />
                        <div class="e-checkbox-indicator"></div>
                    </label>
                </div>
               
                <select *ngSwitchCase="'select'" [id]="field.id" [(ngModel)]="field.value" [disabled]="field.isDisabled">
                    <option *ngFor="let legalValue of field.legalValues" [value]="legalValue.value">{{legalValue.label}}</option>
                </select>
            </div>
            
            <div *ngIf="field.help && data.options.isHorizontal" class="e-dropdown-panel">
                <div class="dropdown">
                    <i class="fa fa-info-circle"></i>
                    <div class="dropdown-content">
                        {{field.help}}
                    </div>
                </div>
            </div>
              
                
        </div>
    </div>
    `
})
export class EPropertyEditorView extends GenericView<EPropertyEditorData> {}
