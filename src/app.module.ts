import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "nestwafprimer",
    entities: [
    "dist/**/*.entity{.ts,.js}"
    //This line is basically just looking for all the entities on my computer and mounts it.
    //This is how typeorm connects to my database.
    ],
    synchronize: true
    }), StudentRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
//The properties above have to sync with the database.
export class AppModule {}

//A macro is a simple code statement that generates other code statements.
//provider is the keyword used to tell nest which provider is associated with this module
//Controller is the keyword used to tell nest which controller is associated with this module

//NOTES
//The most common keywords are get and post
//http/localhost:3000/ is a call

//Notes
//