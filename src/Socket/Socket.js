import { io } from "socket.io-client";
const socket = io.connect("http://192.168.1.11:3001");
export default socket;