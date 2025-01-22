import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/product.interface';
import { getProductImageAction } from './get-product-image.action';

export const getProductById = async (ProductId: string): Promise<Product> => {
  if (ProductId === 'create') {
    return {
      id: '',
      title: '',
      slug: '',
      description: '',
      price: 0,
      stock: 0,
      images: [],
      tags: [],
      sizes: [],
      gender: '',
      user: {} as never,
    };
  }

  try {
    const { data } = await tesloApi.get<Product>(`products/${ProductId}`);

    return {
      ...data,
      images: data.images.map(getProductImageAction),
    };
  } catch (error) {
    console.log(error);
    throw new Error(`Error getting product by id ${ProductId}`);
  }
};
