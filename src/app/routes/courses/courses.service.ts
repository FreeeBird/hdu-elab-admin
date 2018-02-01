import {Injectable} from '@angular/core';
import {SessionStorageService} from 'app/core/storage/storage.module';


@Injectable()
export class CoursesService {
  constructor(private _storage: SessionStorageService) {
  }

}
