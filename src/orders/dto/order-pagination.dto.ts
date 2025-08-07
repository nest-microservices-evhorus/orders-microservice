import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from '../../common/index';
import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from 'generated/prisma';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList)
  status: OrderStatus;
}
