import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import {
  CreateBookmarkDto,
  EditBookmarkDto,
} from '../dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  getBookmarks(userId: number) {
    return this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });
  }
  getBookmarkById(
    bookmarkId: number,
    userId: number,
  ) {
    return this.prisma.bookmark.findFirst({
      where: {
        id: bookmarkId,
        userId,
      },
    });
  }

  createBookmark(
    userId: number,
    dto: CreateBookmarkDto,
  ) {
    return this.prisma.bookmark.create({
      data: {
        ...dto,
        userId,
      },
    });
  }

  async editBookmark(
    bookmarkId: number,
    userId: number,
    dto: EditBookmarkDto,
  ) {
    const bookmark =
      await this.prisma.bookmark.findUnique({
        where: {
          id: bookmarkId,
        },
      });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException(
        'Bookmark not found or Not allowed to edit this bookmark',
      );
    }
    return this.prisma.bookmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBookmark(
    bookmarkId: number,
    userId: number,
  ) {
    const bookmark =
      await this.prisma.bookmark.findUnique({
        where: {
          id: bookmarkId,
        },
      });

    if (!bookmark || bookmark.userId !== userId) {
      throw new ForbiddenException(
        'Bookmark not found or Not allowed to delete this bookmark',
      );
    }
    await this.prisma.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}
