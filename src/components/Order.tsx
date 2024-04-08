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

export default function Order({ pedido }: OrderProps) {

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
    <Card key={pedido.id}>
            <CardHeader className="flex flex-row items-center justify-between gap-5 space-y-0">
              <CardTitle className="text-sm font-medium">{pedido.id}</CardTitle>
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={pedido.estado} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EN">En espera</SelectItem>
                  <SelectItem value="PR">En preparación</SelectItem>
                  <SelectItem value="LI">Listo</SelectItem>
                </SelectContent>
              </Select>

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
