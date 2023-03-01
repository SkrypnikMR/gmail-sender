import { MailMessages } from './consts/index';
import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller('mail')
export class AppController {
  constructor(private readonly mailService: AppService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  @ApiOperation({ summary: 'Send email' })
  @ApiBody({ type: CreateMailDto })
  @ApiResponse({ status: 201, description: MailMessages.Success })
  @HttpCode(201)
  async sendMail(
    @Body() createMailDto: CreateMailDto,
  ): Promise<{ message: MailMessages.Success }> {
    await this.mailService.sendMail(createMailDto);

    return { message: MailMessages.Success };
  }
}
