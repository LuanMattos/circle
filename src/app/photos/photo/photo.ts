export interface Photo{
  photo_id:number;
  photo_post_date:Date;
  photo_url:string;
  photo_description:string;
  photo_allow_comments:boolean;
  photo_likes:number;
  photo_comments:number;
  user_id:number
}
