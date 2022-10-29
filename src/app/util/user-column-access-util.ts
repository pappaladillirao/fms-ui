import { Injectable } from '@angular/core';
import { IUserColumnAccess, UserColumnAccess } from '../shared/model/user-column-access.model';

@Injectable({ providedIn: 'root' })
export class UserColumnAccessUtil {
  constructor() {}

  createUserColumnAccessForm(
    id : any,
    moduleName: any,
    appName: any,
    userId: any,
    jsonObj: any
  ): IUserColumnAccess {
    return {
      ...new UserColumnAccess(),
      id : id,
      columnValues: jsonObj['columnValue'],
      moduleName: moduleName,
      appName: appName,
      userId: userId,
    };
  }
}
