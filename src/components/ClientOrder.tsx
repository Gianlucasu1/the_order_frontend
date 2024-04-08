import { Pedido, Product } from '@/types'
import React, { useEffect, useState } from 'react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getAllProducts } from '@/api/task.api';
import { updateOrder } from '../api/task.api';

interface OrderProps {
  pedido: Pedido;
}

export default function ClientOrder({ pedido }: OrderProps) {

 // const [ estadoPedido, setEstadoPedido ] = useState("");

  

  const [productos, setProductos] = useState<Array<Product>>();
  


  useEffect(() => {
    async function loadTasks() {    
      const res2 = await getAllProducts();
      
      setProductos(res2.data)

    }

    loadTasks();


  }, [])


  const handleSelectChange = (newValue:string) => {
    //setEstadoPedido(newValue);
    updateOrder(pedido.id, {
      nombre_cliente: pedido.nombre_cliente,
      estado: newValue
    })
  };

  


  return (
    <Card className={pedido.estado == "LI" ? "bg-[#F0F9E6]" : "bg-orange-200"} key={pedido.id}>
            <CardHeader className="flex flex-row items-center justify-between gap-5 space-y-0">
              <CardTitle className="text-sm font-medium">{pedido.id}</CardTitle>
              {pedido.estado == "EN" ? <p>En Espera</p> :  pedido.estado == "PR" ? <p>En Preparacion</p> : pedido.estado == "LI" ? <p>Listo</p> : <></>}

            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div className="text-sm font-medium">{pedido.nombre_cliente}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">2 min ago</div>
              <div className="text-sm font-medium">Lista de Items:</div>
              {pedido.detalles?.map((detalle) => {
                const productToShow = productos?.find((producto) => producto.id == detalle.producto)
                return (
                  <div key={detalle.id} className="border border-gray-300 p-5 flex flex-col justify-center items-center">
                    <p>{productToShow?.nombre}</p>
                    <span>{detalle.observaciones}</span>
                    <p>x{detalle.cantidad}Uds</p>
                  </div>
                )
              })}
            </CardContent>

          </Card>
  )
}
