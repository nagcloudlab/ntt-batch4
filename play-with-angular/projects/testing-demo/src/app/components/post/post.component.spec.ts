import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Post } from '../../models/Post';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

describe('PostComponent', () => {

  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      //imports: [PostComponent],
      declarations: [PostComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the post title in the anchor element', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'title 1' };
    component.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title);
  });

  it('should render the post title in the anchor element using debug element', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'title 1' };
    component.post = post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement: HTMLElement = postDebugElement.query(
      By.css('a')
    ).nativeElement;
    expect(aElement.textContent).toContain(post.title);
  });

  it('should raise an event when the delete post is clicked', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    component.post = post;
    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });
    component.onDeletePost(new MouseEvent('click'));
  });

});
