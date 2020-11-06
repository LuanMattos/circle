/**
 * E Porque trabalhar com Tipagens?
 * Como vimos anteriormente, se você precisar colocar no subscrie da sua requisição data[0].nome,
 *  o mesmo vai impedir que você coloque data[0].nom (errado), além de tipar os dados conforme a regra.
 * Neste caso, muito igual Vue com Stores
**/
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
