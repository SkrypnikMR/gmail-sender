import { CreateMailDto } from './dto/create-mail.dto';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createTransport, Transporter } from 'nodemailer';
import { GmailResponseDto } from './dto/gmail-response.dto';

@Injectable()
export class AppService {
  private transporter: Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      secure: this.configService.get<boolean>('MAIL_SECURE'),
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASSWORD'),
      },
    });
  }

  async sendMail(createMailDto: CreateMailDto): Promise<GmailResponseDto> {
    const mailOptions = {
      from: this.configService.get<string>('MAIL_FROM'),
      ...createMailDto,
    };

    return this.transporter.sendMail(mailOptions);
  }
}
