import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {

    createFile(file): Promise<string> {

        try {
            const fileName = uuid.v4() + '.jpg'
            const filePath = path.resolve(__dirname, '..', 'stat')
            if(!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
        } catch (error) {
            throw new HttpException('File upload error', HttpStatus.INTERNAL_SERVER_ERROR)
        }

        return

    }

}
