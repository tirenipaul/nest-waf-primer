import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHello2(): {} {
    return {message: 'Hello World!', title: 'My Greeting App'};
  } 
  //line 9 is called a dictionary data type (in Python) and object literal in TypeScript
  getHome(): {} {
  return {title: 'Home Page'};
  }
  getAboutUs(): {} {
  return {title: 'About Us Page'};
  }
}
