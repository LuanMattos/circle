import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Photo} from "./photo";
import {environment} from "../../../environments/environment";
import {Comments} from '../comments/comments';

const API = environment.ApiUrl;

@Injectable({providedIn:'root'})
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(userName : string){
    return this.http.get<Photo[]>(API + 'photos/' + userName);
  }
  listFromUserPaginated( userName : string,page:number ){
        const params = new HttpParams()
                  .append('page',page.toString());
        return this.http.get<Photo[]>(API +   '/photos/' + userName , {params:params});
  }
  upload(description:string, allowComments:boolean, file){
    const formData = new FormData();

    formData.append('description',description);
    formData.append('allowComments',allowComments?'true':'false');
    formData.append('imageFile',file);

    return this.http.post(API + 'photos_upload', formData,
      {
          observe:"events",
          reportProgress:true
        }
      )

  }

  findById(id : number){
    return this.http.get<Photo>(API + 'get_photo_id/' + id);
  }
  getComments(photoId : number){
    return this.http.get<Comments[]>(API + 'photos/' + photoId + '/comments')
  }
  addComment(photoId:number,commentText:string){
    return this.http.post(
      API + 'comments/' + photoId,
      {commentText:commentText}
      )
  }
  removePhoto(photoId:number){
    return this.http.delete(API + 'photos/' + photoId)
  }
}

