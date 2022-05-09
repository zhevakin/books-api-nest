import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book, BookDocument } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createCatDto: CreateBookDto): Promise<Book> {
    const createdCat = new this.bookModel(createCatDto);
    return createdCat.save();
  }

  async findAll() {
    const books = await this.bookModel.find().exec();
    const count = await this.bookModel.count();
    return {
      books,
      count,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
