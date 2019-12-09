import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor() { }

  createGroups(grouspSize:number, members:string[]):string[][]{
    let remaining:number = members.length % grouspSize;
    let numberOfGroups:number = Math.floor(members.length / grouspSize);
    let groups:string[][] = []
    let k:number = 0;
    let membersCopy = Object.assign([], members); 

    this.shuffle(membersCopy);

    for (let i = 0; i < numberOfGroups; i++){

        let group = [];

        for (let j = 0; j < grouspSize; j++){

            k = i * grouspSize + j;
            group.push(membersCopy[k]);

        }
        
        groups.push(group);

    }

    k++;

    for (let n = 0; n < remaining; n++){

        groups[n].push(membersCopy[k+n]);

    }

    return groups;

}

  shuffle(a:any[]):any[] {
      let j:number;
      let x:any;
      let i:any;
      for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
      }
      return a;
  }

}

