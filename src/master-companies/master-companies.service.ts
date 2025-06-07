import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MasterCompany } from './schemas/master-company.schema';

@Injectable()
export class MasterCompaniesService {
  constructor(
    @InjectModel(MasterCompany.name)
    private masterCompanyModel: Model<MasterCompany>,
  ) {}

  async create(data: any): Promise<MasterCompany> {
    const createdCompany = new this.masterCompanyModel({ data });
    return createdCompany.save();
  }
} 