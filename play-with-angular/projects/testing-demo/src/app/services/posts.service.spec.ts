import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let postService: PostsService;
  let POSTS = [
    {
      id: 1,
      body: 'body 1',
      title: 'title 1',
    },
    {
      id: 2,
      body: 'body 2',
      title: 'title 2',
    },
    {
      id: 3,
      body: 'body 3',
      title: 'title 3',
    },
  ];
  beforeEach(() => {
    let httpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        PostsService,
        {
          provide: HttpClient,
          useValue: httpClientSpyObj,
        },
      ],
    });
    postService = TestBed.inject(PostsService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should return expected posts when getposts is called', (done: DoneFn) => {

    httpClientSpy.get.and.returnValue(of(POSTS));

    postService.getPosts().subscribe({
      next: (posts) => {
        expect(posts).toEqual(POSTS);
        done();
      },
      error: () => {
        done.fail();
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });
});

