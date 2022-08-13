import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Yo Medhi! This is jiglesia\'s new server';
  }
}
