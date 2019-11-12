import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';


@Injectable()
export class AvatarService {
    public gravatar(email: string, size = 90): string {
        return 'https://www.gravatar.com/avatar/' + Md5.hashStr(email) + '.png?s=' + size + '&d=retro&rating=g';
    }
}
