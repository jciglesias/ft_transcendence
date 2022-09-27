import { Controller, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { PrismaService } from "src/prisma.service";

@Controller('upload')
export class UploadsController {
    constructor(private db: PrismaService) {}

    @Post(':id')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File, @Param('id') id: string) {
        this.db.uploadPhoto(id, file.path);
        console.log(file);
        return file;
    }
}