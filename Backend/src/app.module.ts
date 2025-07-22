// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://alyaboelnasr:wYaRRDw48DufyxpY@aisamurai.ukp55kz.mongodb.net"),
  ],
})
export class AppModule {}