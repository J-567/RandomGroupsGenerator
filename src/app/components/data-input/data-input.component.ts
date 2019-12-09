import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GroupsService } from 'src/app/services/groups.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit{

  @ViewChild('member',{static: false}) searchElement: ElementRef;

  members:string[] = [];
  groupsSize:number = 1;
  groupsName:string = 'Grupo';
  
  newMember:string = undefined;

  constructor(private groupsService:GroupsService,
              private router:Router) { }

  ngOnInit() {

  }

  randomize(){
    this.router.navigateByUrl('/results/' + this.members
                              + '/' + this.groupsName 
                              + '/' + this.groupsSize);
    

  }

  erase(miembro:string){
      let index = this.members.indexOf(miembro);
      this.members.splice(index,1);

  }

  addMember(){
    this.members.push(this.newMember);
    this.newMember = undefined;
    this.searchElement.nativeElement.focus();
  }
}
