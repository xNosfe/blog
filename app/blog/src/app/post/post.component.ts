import { Post } from './post';
import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {
  photos: any [];
  post: Post ;
  constructor(private _postService: PostService) {
    this.post = {
      'profile': '',
      'task': '',
      'date': new Date,
      'status': false
    };
   }

  ngOnInit(): void {
    this.getposts();
  }
  getposts() {
    this._postService.getPost().subscribe(
      photos => this.photos = photos,
      err => console.log(err)
    );
  }
  setposts() {
    this._postService.postear(this.post).subscribe(
      post => {this.getposts(); },
      err => console.log(err)
    );
  }
  update() {
    this._postService.update(this.post).subscribe(
      post => {this.getposts(); },
      err => console.log(err)
    );
  }
  delete(id) {
    this._postService.delete(id).subscribe(
      post => {this.getposts(); },
      err => console.log(err)
    );
  }

}
