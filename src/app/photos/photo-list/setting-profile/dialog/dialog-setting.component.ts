import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface Photo {
  photo_id: number;
  photo_url: string;
  photo_description: string;
  photo_allow_comments: string;
}

@Component({
  selector: 'app-dialog-setting-component',
  templateUrl: 'dialog-setting.component.html',
  styleUrls: ['./dialog-setting.component.scss'],
})
export class DialogSettingComponent {
  photoId: number;
  photoComment: boolean;
  comments;

  constructor(
    public dialogRef: MatDialogRef<DialogSettingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Photo
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
