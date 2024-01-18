import { Component } from '@angular/core';
import { Post } from '../../models/Post';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {

  post!: Post;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.postsService.getPost(+id).subscribe((post) => (this.post = post));
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.postsService.updatePost(this.post).subscribe(() => this.goBack());
  }

}
