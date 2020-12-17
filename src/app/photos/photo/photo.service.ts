import {HttpClient, HttpEvent, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Photo} from './photo';
import {environment} from '../../../environments/environment';
import {Comments} from '../comments/comments';
import {User} from '../../core/user/user';
import {Observable} from 'rxjs';

const API = environment.ApiUrl;

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {}





  /** Comments **/
  getComments(photoId: number): any{
    return this.http.get<Comments[]>(API + '/comments_photo/' + photoId);
  }

  listFromCommentsPaginated(photoId: number, page: number ): any{
    return this.http.get<Comments[]>(API + '/comments_photo/' + photoId + '/' + page);
  }

  addComment(photoId: number, commentText: string, userName: string): any{
    return this.http.post(
      API + 'comments/' + photoId,
      {commentText, userName}
    );
  }
  saveComment(photoId: number, commentText, commentId: number): any{
    return this.http.put<Comments>(
      API + 'save_comment/' + photoId,
      {commentText, commentId}
    );
  }
  deleteComment(commentId: number): any{
    return this.http.delete(API + 'delete_comment/' + commentId);
  }






  /** Photo **/
  listFromUser(userName: string): Observable<Photo[]>{
    return this.http.get<Photo[]>(API + 'photos/' + userName);
  }

  listFromUserPaginated( userName: string, page: number ): Observable<Photo[]>{
        const params = new HttpParams()
                  .append('page', page.toString());
        return this.http.get<Photo[]>(API +   'photos/' + userName , { params });
  }

  upload(description: string, allowComments: boolean, publico: boolean, file): Observable<any>{
    const formData = new FormData();

    formData.append('description', description);
    formData.append('public', publico ? 'true' : 'false');
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + 'photos_upload', formData,
      {
          observe: 'events',
          reportProgress: true
        }
      );

  }


  findById(id: number): Observable<Photo>{
    return this.http.get<Photo>(API + 'get_photo_id/' + id);
  }

  removePhoto( photoId: number ): Observable<any>{
    return this.http.delete(API + 'photos/' + photoId);
  }





  /** Likes **/
  like( photoId:number,userName:string ){
    return this.http.put<any>(API + 'add_like',{photoId,userName},{ responseType: 'json'})
  }




  /** Search **/
  getUserByName( name:string ){
    return this.http.put<User[]>(API + 'search',{name},{ responseType: 'json'})
  }

  getUserByNamePaginated( name:string,page:number ){
    return this.http.put<User[]>(API + 'search/' + page,{name},{ responseType: 'json'})
  }

  /** Follow **/

  follow( userId: number ): Observable<boolean>{
    return this.http.put<boolean>(API + 'follow/' + userId, {},{ responseType: 'json' });
  }

}

