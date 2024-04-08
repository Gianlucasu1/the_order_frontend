import { getAllProducts } from '@/api/task.api';
import { CreateOrder } from '@/components/CreateOrder';
import { MakeOrderProductList } from '@/components/make-order-product-list';
import { Product } from '@/types';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function MakeOrder() {
  const [products, setProducts] = useState<Array<Product>>([]);

  const navigate = useNavigate();

  useEffect(() => {  
    async function loadTasks() {
      const res = await getAllProducts()
      console.log(res.data);
      setProducts(res.data);
    }

    loadTasks();


  }, [])

  return (
    <div>
      <CreateOrder />
    </div>
  )
}
