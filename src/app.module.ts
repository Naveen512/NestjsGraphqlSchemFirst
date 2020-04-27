import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { StudentResolver } from './student/student.resolver';
import {StudentService} from './student/student.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions:{
        path: join(process.cwd(),'src/graphql.schema.ts')
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService, StudentService, StudentResolver],
})
export class AppModule {}
