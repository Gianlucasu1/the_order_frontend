import { getAllProducts } from '@/api/task.api';
import { MakeOrderProductList } from '@/components/make-order-product-list'
import { Product } from '@/types';
import { useEffect, useState } from 'react'

export default function CreateOrderDetails() {

  const [products, setProducts] = useState<Array<Product>>([]);
  
  useEffect(() => {  
    async function loadTasks() {
      const res = await getAllProducts()
      console.log(res.data);
      setProducts(res.data);
    }

    loadTasks();


  }, [])

  return (
    <MakeOrderProductList products={products} />
  )
}
