import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  votedCandidateId!: string;

  voter = {
    'name' : 'abcd',
    'nic' : '987654324V',
    'isVoted' : false
  }
  
  candidateList : any = [
    {
      'id' : '1',
      'title' : 'Mr',
      'name' : 'Kusal Mendis',
      'partyName' : 'SLC',
      'partyColor' : '#ff0000',
      'logo' : 'https://www.freevector.com/uploads/vector/preview/30676/Cool_Cricket_Logo_1.jpg',
      'candidateImage' : 'https://www.mykhel.com/img/2020/07/kusal-mendis-sri-lanka-1593927959.jpg',
    },
    {
      'id' : '2',
      'title' : 'Mrs',
      'name' : 'Ann George',
      'partyName' : 'UPF',
      'partyColor' : '#00ff00',
      'logo' : 'https://www.freevector.com/uploads/vector/preview/30676/Cool_Cricket_Logo_1.jpg',
      'candidateImage' : './assets/men2.jpg',
    },
    {
      'id' : '3',
      'title' : 'Mrs',
      'name' : 'Babara Chistina',
      'partyName' : 'UPPN',
      'partyColor' : '#f00f00',
      'logo' : 'https://www.freevector.com/uploads/vector/preview/30676/Cool_Cricket_Logo_1.jpg',
      'candidateImage' : './assets/men1.jpg',
    },
    {
      'id' : '4',
      'title' : 'Mr',
      'name' : 'Peter Leayan',
      'partyName' : 'LDC',
      'partyColor' : '#ff00ff',
      'logo' : 'https://www.freevector.com/uploads/vector/preview/30676/Cool_Cricket_Logo_1.jpg',
      'candidateImage' : './assets/men.jpg',
    },
    {
      'id' : '5',
      'title' : 'Mrs',
      'name' : 'sherin Jack',
      'partyName' : 'CPPU',
      'partyColor' : '#ff00f0',
      'logo' : 'https://www.freevector.com/uploads/vector/preview/30676/Cool_Cricket_Logo_1.jpg',
      'candidateImage' :  './assets/lady.jpg',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isVoted(candidateId: string): boolean {
    if(this.votedCandidateId === candidateId && this.voter.isVoted){
      return true;
    }
    return false;
  }

  vote(candidateId : string) : void {
    this.votedCandidateId = candidateId;
    this.voter.isVoted = true;
    console.log(candidateId);
  }

}
