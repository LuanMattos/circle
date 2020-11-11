import {Injectable} from '@angular/core';
import {Comments} from '../../comments/comments';

@Injectable({providedIn:'root'})
export class PhotoCommentsService{
  comment:Comments
}
