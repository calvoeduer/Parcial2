import { Injectable, Output, EventEmitter } from '@angular/core';
import * as signalR from '@aspnet/signalR';

import { Tiquet } from '../models/tiquet';
import { TiquetService } from './tiquet.service';

@Injectable({
	providedIn: 'root'
})
export class SignalrService {
	private hubConnection: signalR.HubConnection;
	@Output() signalReceived = new EventEmitter<Tiquet>();
	constructor() {
		this.buildConnection();
		this.startConnection();
	}

	buildConnection() {
		this.hubConnection = new signalR.HubConnectionBuilder().withUrl('/travelHub').build();
	}

	startConnection() {
		this.hubConnection
			.start()
			.then(() => {
				console.log('Connection started');
				this.registerSignalEvents();
			})
			.catch((err) => {
				console.log('Error: ' + err);
				setTimeout(() => this.startConnection(), 3000);
			});
	}

	private registerSignalEvents() {
		this.hubConnection.on('NewTicket', (data: Tiquet) => {
			this.signalReceived.emit(data);
		});
	}
}