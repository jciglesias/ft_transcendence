import { Injectable } from '@nestjs/common'

@Injectable()
export class PongService {
    getPong() : string {
        return "here goes pong";
    }
}