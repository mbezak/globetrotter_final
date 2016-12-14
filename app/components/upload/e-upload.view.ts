import {Component} from "@angular/core";

import {EUploadData} from "./e-upload.data";
import {GenericView} from "../generic.view";
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

//https://github.com/valor-software/ng2-file-upload/blob/master/demo/components/file-upload/simple-demo.ts

const URL = 'http://localhost:8181/faces/api/upload';

@Component({
    selector: 'e-upload',
    directives: [FileSelectDirective, FileDropDirective],
    template: `
        <div *ngIf="data.message">
        
            <div ng2FileDrop class="e-upload"
                 [ngClass]="{'e-upload-hover': hasBaseDropZoneOver}"
                 (fileOver)="fileOverBase($event)"
                 [uploader]="uploader"
                 >
                         
                <div class="e-empty-container">
                    <i class="fa fa-cloud-upload fa-5x"   [ngClass]="{'fa-file-image-o': hasBaseDropZoneOver}"></i>
                    <div class="message">
                        {{data.message}}
                    </div> 
                </div>
                
                <div *ngIf="uploader.queue.length !== 0" class="e-filled-container">   
                    <div *ngIf="uploader.progress < 100" class="e-progress">
                        <div class="e-progress-bar" [ngStyle]="{ 'width': uploader.progress + '%' }"></div>
                    </div>
                    <div *ngFor="let item of uploader.queue">
                        <div *ngIf="item.progress < 100" class="e-filename">
                            {{ item?.file?.name }}
                        </div>
                    </div> 
                </div>      
                
            </div>
            
        </div>
        
        <div *ngIf="!data.message" class="e-single-upload">
            <input type="file" ng2FileSelect [uploader]="uploader" name="file" id="file" class="e-inputfile" />
            <label for="file"><i class="fa fa-camera"></i></label>
        </div>        
    `
})
export class EUploadView extends GenericView<EUploadData> {
    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
        this.onUpload();
    }

    public onUpload(): void {
        if (this.uploader.queue[0]) {
            this.data.document = this.uploader.queue[0]._file;
            this.uploader.clearQueue();
            this.onActionClicked(this.data.document);
        }
    }

    public onClear(): void {
        this.uploader.clearQueue();
    }
}