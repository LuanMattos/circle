import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
export interface Photo {
  photo_id: number;
  photo_url: string;
  photo_description: string;
  photo_allow_comments: string;
}

@Component({
  selector: 'app-dialog-component',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  photoId: number;
  photoComment: boolean;
  comments;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  delete( photo ): void{
  }
  edit( photo ): void{
  }


}
