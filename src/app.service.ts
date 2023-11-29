import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Halo! dari backend app SPMI Gunadarma';
  }
}
