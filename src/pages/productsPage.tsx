import React, { useEffect, useState } from 'react'
import { ProductList } from '../components/product-list'
import { getAllProducts } from '../api/task.api'
import { Product } from '../types';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';




export const ProductsPage = () => {

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

  const onClick = () => {
    navigate("/crear-producto")
  }

  return (
    <div className='py-10 flex flex-col gap-5 items-center justify-center'>
      <ProductList products={products}  />
      <Button onClick={onClick} size="sm">Añadir producto</Button>
    </div>
  )
}
