import { HttpException, HttpStatus } from '@nestjs/common';

export class Bad_request_400 extends HttpException {
  constructor() {
    super('400 : Data tidak berhasil dimuat!', HttpStatus.BAD_REQUEST);
  }
}

export class Unauthorized_401 extends HttpException {
  constructor() {
    super('401 : User tidak berhak mengakses data!', HttpStatus.UNAUTHORIZED);
  }
}

export class Forbidden_403 extends HttpException {
  constructor() {
    super('403 : Data tidak berhak diakses!', HttpStatus.FORBIDDEN);
  }
}

export class Not_found_404 extends HttpException {
  constructor() {
    super('404 : Data tidak berhasil ditemukan!', HttpStatus.NOT_FOUND);
  }
}
