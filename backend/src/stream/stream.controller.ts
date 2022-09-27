import { Controller, Get, Param, StreamableFile } from "@nestjs/common";
import { createReadStream } from "fs";
import { join } from "path";
import { observable } from "rxjs";
import { PrismaService } from "src/prisma.service";

@Controller('stream')
export class StreamController {
    constructor(private db: PrismaService) {}

    @Get(':id')
    async getFile(@Param('id') id: string): Promise<StreamableFile> {
        const photo = await this.db.getPhotoPath(id);
        const file = createReadStream(join(process.cwd(), photo));
        return new StreamableFile(file);
    }
}