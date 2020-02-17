import { Component, OnInit ,ViewChild,ViewEncapsulation} from '@angular/core';
import { catchError, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { concat, Observable, of, Subject } from 'rxjs';
import { DataService, HttpData} from '../Data.service';
import { NgSelectComponent} from '@ng-select/ng-select';



@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./page1.component.css']
 
})


 export class Page1Component implements OnInit {


  //isbeingSearched: boolean = false;

  item$: Observable<HttpData[]>;
  peopleLoading = false;
  peopleInput$ = new Subject<string>();
  roles =['None','Own Recordings','Group Recordings','All Recordings']; 
 


  constructor(private dataService: DataService) {}

  @ViewChild("elem", {static: false}) select1Comp: NgSelectComponent;
  @ViewChild("eleme2", {static: false}) select1Comp2: NgSelectComponent;

  selectedPersons:string;
  selectedPersons1:string;
  role:string='None';
  

  ngOnInit() { 

    this.loadPeople();
    

  }

  // OnAdd(){  //When Item is added
  //   console.log("item added")
  //    this.loadPeople();
 
    
  // }

  // OnBlur(){
  //   console.log("OnBlue");
  //   this.isbeingSearched = false;
  //   this.select1Comp.close();//for first ngselect component
  // }

  // OnBlur2(){
  //   console.log("OnBlue");
  //   this.isbeingSearched = false;
  //   this.select1Comp2.close();//for second ngselect component
  // }

  // OnRemove(){ //when item is removed
  //   console.log("item removed")
  //   this.select1Comp.close();
  //   this.select1Comp2.close();
  //   this.loadPeople();
   
  // }


  GetRoleValue(args){ //Extracting Selected Role
    var role = args.value;
    console.log(args.target.value)
  }

  UserDetails() //Save Changes
  {
    //var details:any ={};
    console.log("details Saved");
    console.log(this.role,this.selectedPersons,this.selectedPersons1);
    var userdto:any = {};
    userdto["Roles"] = this.role;
    userdto["Groupname"] = this.selectedPersons;
    userdto["Groupnames"] = this.selectedPersons1;
    var stringData = JSON.stringify(userdto);
    this.dataService.postData(stringData);
  
  }
  
 
  private loadPeople() { 

   this.item$= concat(
      this.peopleInput$.pipe(
          distinctUntilChanged(),
          tap(() => this.peopleLoading = true),
          switchMap(term => this.dataService.getPeople(term).pipe(
              catchError(() => of([])), // empty list on error
              tap(() => this.peopleLoading = false)
          ))
      )
   )
   console.log("loadpeople")

  }

}