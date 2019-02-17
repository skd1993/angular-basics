import { Component } from '@angular/core'

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})

export class TestComponent {
	num: number = 10
	status: string = 'online'

	constructor() {
		this.num = Math.random()
		this.status = this.num > 0.5 ? 'online' : 'offline'
	}

	getStatus() {
		return this.status
	}

	getColor() {
		return this.status === 'online' ? 'blue' : 'red';
	}
}