import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Photo} from "./photo";
import {environment} from "../../../environments/environment";
import {Comments} from '../comments/comments';

const API = environment.ApiUrl;

@Injectable({providedIn:'root'})
export class PhotoService {

  constructor(private http: HttpClient) {}

  getComments(photoId : number){
    return this.http.get<Comments[]>(API + '/comments_photo/' + photoId)
  }

  listFromCommentsPaginated(photoId : number,page:number ){
    return this.http.get<Comments[]>(API + '/comments_photo/' + photoId + '/' + page)
  }

  addComment(photoId:number,commentText:string,userName : string){
    return this.http.post(
      API + 'comments/' + photoId,
      {commentText:commentText,userName:userName}
    )
  }
  saveComment(commentId:number,commentText){
    return this.http.put<Comments>(
      API + 'save_comment/' + commentId,
      {commentText}
    )
  }
  getComment(commentId : number){
    return this.http.get<Comments>(API + '/get_comment_id/' + commentId)
  }



  listFromUser(userName : string){
    return this.http.get<Photo[]>(API + 'photos/' + userName);
  }

  listFromUserPaginated( userName : string,page:number ){
        const params = new HttpParams()
                  .append('page',page.toString());
        return this.http.get<Photo[]>(API +   '/photos/' + userName , {params:params});
  }

  upload(description:string, allowComments:boolean,_public:boolean, file){
    const formData = new FormData();

    formData.append('description',description);
    formData.append('public',_public?'true':'false');
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

  removePhoto( photoId:number ){
    return this.http.delete(API + 'photos/' + photoId)
  }


  like( photoId:number,userName:string ){
    return this.http.put(API + 'add_like',{photoId,userName},{ responseType: 'text'})
  }

  getUserByName( name:string ){
    return this.http.put(API + 'search',{name},{ responseType: 'json'})
  }
}

