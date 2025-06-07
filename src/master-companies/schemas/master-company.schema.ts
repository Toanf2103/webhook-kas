import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class MasterCompany extends Document {
  @Prop({ type: Object })
  data: Record<string, any>;
}

export const MasterCompanySchema = SchemaFactory.createForClass(MasterCompany); 