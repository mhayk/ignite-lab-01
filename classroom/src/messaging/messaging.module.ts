import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CoursesServices } from 'src/services/courses.service';
import { EnrollmentsServices } from 'src/services/enrollments.service';
import { StudentsServices } from 'src/services/students.services';
import { PurchasesController } from './controllers/purchases.controller';

// HTTP (MVC)
// HTTP (KAFKA RECEPTER)

@Module({
  imports: [DatabaseModule],
  controllers: [PurchasesController],
  providers: [StudentsServices, CoursesServices, EnrollmentsServices],
})
export class MessagingModule {}
