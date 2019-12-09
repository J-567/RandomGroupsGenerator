import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  groupsList:string[][] = undefined;
  groups:any[] = [];
  groupsName:string = undefined;
  groupsSize:number = undefined;
  members:string[] = undefined;
  
  constructor(private route: ActivatedRoute,
              private router: Router,
              private groupsService: GroupsService
              ) { }

  ngOnInit() {
    
    this.route.params.subscribe(data => {
      this.groupsName = data.groupsName;   
      this.members = data.members.split(",");
      this.groupsSize = data.groupsSize;
      
      this.generate();
    });
  }

  newGroups(){
    this.router.navigateByUrl("/input");

  }

  generate(){
    this.groups = [];
    this.groupsList = this.groupsService.createGroups(this.groupsSize, this.members)
      let i = 1
      for(let group of this.groupsList){
        this.groups.push({'name': this.groupsName + ' ' + i, 'members': group })
        i++
      }
  }

}
