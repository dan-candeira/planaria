import { io } from 'socket.io-client';

export interface User {
	user: string;
	socket: string;
	id: string;
}

class SocketioService {
	socket: any;

	constructor() {}

	setupSocketConnection(): void {
		this.socket = io(import.meta.env.VITE_SOCKET_ENDPOINT);
	}

	disconnect(): void {
		if (this.socket) {
			this.socket.disconnect();
		}
	}

	joinRoom(room: string, user: string | null): void {
		this.socket.emit('joinRoom', { roomCode: room, user });
	}

	newRoom(): void {
		this.socket.emit('newRoom');
	}

	vote(cb: (vote: number | null) => void): void {
		if (!this.socket) return cb(null);

		this.socket.on('vote', (vote: number) => {
			cb(vote);
		});
	}

	changeUsername(username: string, roomCode: string | undefined): void {
		this.socket.emit({ user: username, roomCode });
	}

	subscribeToRoomCode(cb: (room: string) => void): void {
		this.socket.on('roomCode', (roomCode: string) => {
			cb(roomCode);
		});
	}

	subscribeToUsername(cb: (user: string) => void): void {
		this.socket.on('user', (username: string) => {
			cb(username);
		});
	}

	subscribeToUsers(cb: (users: User[]) => void): void {
		this.socket.on('users', (userArray: User[]) => {
			console.log(userArray);
			cb(userArray);
		});
	}
}

export default new SocketioService();
