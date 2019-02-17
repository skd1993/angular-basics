import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  isButtonDisabled = true
  testStatus = "no test"
  testName = ''

  constructor() {
    setTimeout(()=>{
      this.isButtonDisabled = false
      console.log('button is now enabled!')
    },2000)
  }

  changeStatus() {
    this.testStatus = "test has changed"
  }

  onUpdateInput(e: Event) {
    this.testName = (<HTMLInputElement>e.target).value
  }

  ngOnInit() {
  }

}
