import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


export class HttpData {
  groupname: string;

}


@Injectable({
  providedIn: 'root'
})


export class DataService {

  items: HttpData[] = [];
  constructor(public http: HttpClient) { }

  getPeople(term: string = null): Observable<HttpData[]> {
    console.log("getpeople")
    this.getHttpData(term).subscribe(items => this.items = items);

    return of(this.items).pipe(delay(100));
  }



  getHttpData(term: string = null) { //Http Call

    console.log("gethttpdataworking:" + term)

    if (term) {
      return this.http.get<HttpData[]>(`http://localhost:8089/Group/AllGroups?data=${term}`)
    }

    else {
      return of([]);
    }

  }

  postHTTPData(data) { //Http Post in DB
    console.log("Posting data to DB")
    return this.http.post('http://localhost:8089/Group/ConfigureUsers?user=Navneet.kumar@mitel.com', data).subscribe(res => this.Success(res), res => {
      return this.Error(res);
    });
  }
  Error(res) {
    console.log("Error is seen");
    console.debug(res);
  }
  Success(res) {
    console.log(res);
    console.log("Successfully Posted");
  }

  postData(Data: string) {
    this.postHTTPData(Data);
  }


}


