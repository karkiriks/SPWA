import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
/**
 * Created by RIKS on 12/21/16.
 */
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService{

  private serverUrl: string = 'http://localhost:8081/';

  constructor(private http: Http){}

  getAuthentication(): void {
    this.http.get(this.serverUrl + 'admin')
      .toPromise()
      .then()
      .catch(this.handleError);
  }



  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
