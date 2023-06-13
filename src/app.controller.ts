import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
  //The above get is a get decorator
  //Lines 8 to 11 is a method because it is under a class
  //'this' in line 10 represents the object instantiated in the class.
  //line 10 is invoking app service.
  //dependency injection takes a defined class and brings it into a space as if it belongs in this new class
  //and uses the constructor, telling it it is injectable.
  //Injecting prevents you from having to keep instantiating.
  
  @Get('hello2')
  @Render('index.html')
  getHello2():{}{
    return this.appService.getHello2();
  }
//Above, the second decorator is invoking render. 
//It is saying to look for the file and take it to send out. It replaces the placeholders in the file with ...
  @Get()
   @Render('home.html')
   getHome(): {}{
    return this.appService.getHome();
   }

  @Get('about-us')
   @Render('about-us.html')
   getAboutUs(): {}{
    return this.appService.getAboutUs();
   }
}
