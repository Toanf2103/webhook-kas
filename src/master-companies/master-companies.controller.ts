import { Controller, Post, Body } from '@nestjs/common';
import { MasterCompaniesService } from './master-companies.service';

@Controller('MasterCompanies')
export class MasterCompaniesController {
  constructor(private readonly masterCompaniesService: MasterCompaniesService) {}

  @Post('callback')
  async handleCallback(@Body() data: any) {
    return this.masterCompaniesService.create(data);
  }
} 