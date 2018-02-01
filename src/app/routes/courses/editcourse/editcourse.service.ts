import {Injectable} from '@angular/core';
import {SessionStorageService} from 'app/core/storage/storage.module';


@Injectable()
export class EditcourseService {
  constructor(private _storage: SessionStorageService) {
  }

}
