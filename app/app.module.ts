import { NgModule }         from '@angular/core';
import { CommonModule }     from "@angular/common";
import { FormsModule }      from "@angular/forms";
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { GenericFactory} from "./genericframework/generic.factory";
import { GenericService} from "./genericframework/generic.service";
import { RequesterService} from "./requester.service";
import {ConfigService} from "./config.service";

@NgModule({
    imports:      [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        GenericService,
        GenericFactory,
        RequesterService,
        ConfigService
    ],
    bootstrap:    [AppComponent],
    declarations: [AppComponent],
})
export class AppModule {}