import { getAllOrders } from '@/api/task.api';
import { Pedido } from '@/types';
import React, { useEffect, useState } from 'react'
import ClientOrder from './ClientOrder';

export const ClientOrdersList = () => {

  const [pedidos, setPedidos] = useState<Array<Pedido>>();
  
  


  useEffect(() => {
    async function loadTasks() {
      const res = await getAllOrders()      
      setPedidos(res.data);      
    }

    loadTasks();


  }, [])


  return (
    <div className="mt-10 w-4/5 ml-auto mr-auto flex justify-center items-center self-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      {pedidos?.map((pedido) => {
        return (
          <ClientOrder pedido={pedido} />
        )
      })}
    </div>
  )
}
