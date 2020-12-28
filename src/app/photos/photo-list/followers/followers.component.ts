import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FollowerService} from '../../../core/follower/follower.service';

@Component({
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit{
  user;
  followers;
  stoppedRequest: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private followerService: FollowerService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data.user;
    this.followers = this.activatedRoute.snapshot.data.follower;
  }
  loadFollowers(): void{
    if (!this.stoppedRequest) {
      this.followerService
        .getFollowersByUser(this.followers.length)
        .subscribe(res => {
          this.stoppedRequest = false;
          if (res && !res.length) {
            this.stoppedRequest = true;
          }
          res.reduce((acc, current) => {
            const x = this.followers.find(item => item.user_name === current.user_name);
            if (!x) {
              return this.followers = this.followers.concat(res);
            } else {
              return acc;
            }
          }, []);
        });
    }
  }
  redirectUser( follower ): void{
    this.router.navigate(['user/' + follower?.user_name]);
  }
}
