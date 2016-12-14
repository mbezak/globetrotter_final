import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, RequestMethod} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RequesterService {
    private apiUrl: string;

    constructor(private http : Http) {}

     placeRequest(method : RequestMethod, callback : string, json? : any) {
        var url = this.apiUrl + callback;
        switch(method) {
            case RequestMethod.Get  :   return this.get(url);
            case RequestMethod.Post :   return this.post(url, json);
            case RequestMethod.Put  :   return this.put(url, json);
            case RequestMethod.Delete : return this.delete(url);
            default : return;
        }
    }

    private get(url: string):  Promise<any> {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get(url, { withCredentials: true })
            .toPromise()
            .then(res => {
                return res.text();
            })
            .catch(this.handleError);
    }
    
    private post(url: string, data?: any):  Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ withCredentials: true });
        return this.http.post(url, data, { withCredentials: true, headers: headers })
            .toPromise()
            .then(res => {
                return res.text();
            })
            .catch(this.handleError);
    }

    private put(url: string, data?: any):  Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put(url, data, { withCredentials: true, headers: headers })
            .toPromise()
            .then(res => {
                return res.text();
            })
            .catch(this.handleError);
    }

    private delete(url: string):  Promise<any> {
        return this.http.delete(url, { withCredentials: true })
            .toPromise()
            .then(res => { return res.text();})
            .catch(this.handleError);
    }


    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    public configLoader() : Promise<any> {
        return this.get("config.json")
            .then(res => { return JSON.parse(res)})
            .catch(err =>{ return null });
    }

    public setApiUrl(apiUrl : string) : void {
        this.apiUrl = apiUrl;
    }
}