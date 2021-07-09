import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('UNAB')
    .setDescription('Registro de estudiantes, materias y notas')
    .setVersion('1.0')
    .addTag('Estudiantes, materias y notas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentacion', app, document);


  await app.listen(process.env.PORT || 3000);


}
bootstrap();
