// tslint:disable-next-line:import-blacklist
import {
  Observable
// tslint:disable-next-line:import-blacklist
} from 'rxjs/Rx';
import {
  Injectable
} from '@angular/core';
// import {Observable} from 'rxjs/Rx';
import {
  Post
} from './post';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class PostService {
  private _url = 'http://localhost:8000/post';
  constructor(private _http: HttpClient) {}

  getPost(): Observable < Post[] > {
    return this._http.get < Post[] > (this._url)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  postear(blog): Observable < any > {
    return this._http.post < Post[] > (this._url, blog)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  update(task): Observable<any> {
    return this._http.put < Post[] > (this._url, task)
    .do(data => console.log(data))
    .catch(this.handleError);
  }

  delete(): Observable<any> {
    return this._http.delete < Post[] > (this._url)
    .do(data => console.log(data))
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
