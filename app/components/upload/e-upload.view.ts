/**
 * @author Edilion devs, Cristiana Man
 */
import {Component} from "@angular/core";

import {EUploadData} from "./e-upload.data";
import {GenericView} from "../../genericframework/generic.view";
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

const URL = 'http://localhost:8181/faces/api/upload';

@Component({
    selector: 'e-upload',
    directives: [FileSelectDirective, FileDropDirective],
    template: `
        <div class="e-single-upload">
            <input type="file" ng2FileSelect [uploader]="uploader" name="file" id="file" class="e-inputfile" />
            <label for="file"><i class="fa fa-camera"></i></label>
        </div>        
    `
})
export class EUploadView extends GenericView<EUploadData> {
    public uploader: FileUploader = new FileUploader({ url: URL });

    public onUpload(): void {
        if (this.uploader.queue[0]) {
            this.data.document = this.uploader.queue[0]._file;
            this.uploader.clearQueue();
            this.onActionClicked(this.data.document);
        }
    }
}