import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'Nike',
    //   createAt: new Date().getTime(),
    // },
    // {
    //   id: uuid(),
    //   name: 'Adidas',
    //   createAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
    };
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException();
    return brand;
  }

  update(id: string, updateBrand: UpdateBrandDto) {
    let brandItem = this.findOne(id);
    this.brands.map((element) => {
      if (element.id === id) {
        brandItem.createAt = new Date().getDate();
        brandItem = {
          ...brandItem,
          ...updateBrand,
        };
        console.log('element update succesfully');
        return brandItem;
      }
    });
  }

  remove(id: string) {
    this.brands.filter((brand) => brand.id !== id);
  }

  fillBrandsWithSeed(brand: Brand[]) {
    this.brands = brand;
  }
}
