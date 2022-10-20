import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

//brands seed
export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Nike',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Adidas',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Puma',
    createAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Reebok',
    createAt: new Date().getTime(),
  },
];
