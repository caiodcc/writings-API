import { Injectable } from '@nestjs/common';
import { Writing } from './entities/writings.entity';
import { CreateWritingDto } from './dtos/create-writing.dto';

import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WritingsService {
    constructor(private prisma: PrismaService) { }


    async findAll(){
       const allText = await this.prisma.text.findMany();
       return [...allText]
     

    }
    async createWriting(data: CreateWritingDto) {

        const writingExists = await this.prisma.text.findFirst({
            where: {
                title: data.title
            }
        });

        if (writingExists) {
            throw new Error("Title already exists.");
        }

        const newWriting = await this.prisma.text.create({
            data,
        });
        return newWriting;
    }

    async update(id: number, data: Partial<CreateWritingDto>) {
        const updatedWriting = await this.prisma.text.update({
            where: { id },
            data,
        });

        if (!updatedWriting) {
            throw new Error("Writing not found.");
        }

        return updatedWriting;
    }

    async remove(id: number) {
        const deletedWriting = await this.prisma.text.delete({
            where: { id },
        });

        if (!deletedWriting) {
            throw new Error("Writing not found.");
        }

        return deletedWriting;
    }

    async findOne(id: number) {
        const writing = await this.prisma.text.findUnique({
            where: { id },
        });

        if (!writing) {
            throw new Error("Writing not found.");
        }

        return writing;
    }
}
