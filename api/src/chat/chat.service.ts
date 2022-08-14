import { Injectable } from "@nestjs/common";

@Injectable()
export class ChatService {
    getChat() : string {
        return "here goes the chat";
    }
}