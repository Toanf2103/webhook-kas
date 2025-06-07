import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MasterCompaniesController } from './master-companies.controller';
import { MasterCompaniesService } from './master-companies.service';
import { MasterCompany, MasterCompanySchema } from './schemas/master-company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MasterCompany.name, schema: MasterCompanySchema },
    ]),
  ],
  controllers: [MasterCompaniesController],
  providers: [MasterCompaniesService],
})
export class MasterCompaniesModule {} 