// import { TestBed , inject} from '@angular/core/testing';
// import{ Post} from './post.model';
// import { DataService } from './Data.service';
// import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

// describe('DataServiceService', () => {

//   let service: DataService;
//   let httpMock:HttpTestingController;

//   beforeEach(() => {
//    TestBed.configureTestingModule({
//     imports:[HttpClientTestingModule],
//     providers:[DataService]
//     });
//      service=TestBed.get(DataService);
//     httpMock=TestBed.get(HttpTestingController);
//   });

//   afterEach(()=>{
//     httpMock.verify();
//   })

//   it('should retrieve posts from APi via GET', () => {
//     const dummyPosts:Post[]=[
//       {userId:'1', id:1, body: 'Hello World',title:'Testing Angular 1'},
//       {userId:'2', id:2, body: 'Hello World',title:'Testing Angular 2'}
//     ]
//     service.getPeople().subscribe(posts=>{
//       expect(posts.length).toBe(2);
//       expect(posts.length).toBe(2);

//     });
    
//     const request =httpMock.expectOne('${`http://localhost:8089/Group/AllGroups?data=${term}`}');
//     expect(request.request.method).toBe('GET');
//     request.flush(dummyPosts); 
    
//   });
// });
