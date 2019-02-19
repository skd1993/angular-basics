import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-keys',
  templateUrl: './test-keys.component.html',
  styleUrls: ['./test-keys.component.css']
})
export class TestKeysComponent implements OnInit {

  k = ''

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event: any){
      this.k = event.key
      console.log(event)
  }

}
