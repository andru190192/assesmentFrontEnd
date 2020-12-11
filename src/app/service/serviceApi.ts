import { environment } from '../../environments/environment'
import {Injectable} from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, retry, catchError} from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class serviceApi {

    constructor(
      public httpClient:HttpClient
    ){}

    public getCharacter(){
        const hResponse =  this.httpClient.get(environment.APIEndPoint).pipe(map(response => (response as Response)));
        return hResponse;
    }
}