import { TableCell, TableRow } from "./ui/table"
import { Button } from "./ui/button"
import { Product } from '@/types'
import {  useParams } from 'react-router-dom'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useForm } from 'react-hook-form'
import { createDetailOrder } from '@/api/task.api'


interface productToShowOrder {
  product: Product
}

export const ProductToShowOrder = ({ product }: productToShowOrder) => {

  

  const { id } = useParams()

  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await createDetailOrder(Number(id), product.id, data)
  })





  return (

    <TableRow key={product.id}>
      <TableCell className="border-0">
        <div className="flex items-center gap-4" >
          <img
            alt={product.nombre}
            className="rounded-lg"
            height="64"
            src={product.image}
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64"
          />
          <div className="grid gap-1">
            <h3 className="font-semibold">{product.nombre}</h3>
            <p className="text-sm leading-none">
              {product.descripcion}
            </p>
          </div>
        </div >
      </TableCell >
      <TableCell className="border-0 flex items-center justify-center">
        <form onSubmit={onSubmit}>
          <div className="text-2xl font-semibold">{product.precio}</div>
          <div className="mx-auto max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cantidad">Cantidad</Label>
              <Input {...register("cantidad")} id="cantidad" placeholder="Entra la cantidad" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="observaciones">Observaciones</Label>
              <Textarea {...register("observaciones")} id="observaciones" placeholder="Entra observaciones (ejm: sin salsa)" />
            </div>
          </div>
          <Button onClick={() => {

          }} size="sm">Añadir a la orden</Button>
        </form>
      </TableCell>
      <TableCell className="border-0 flex gap-2">

      </TableCell>
    </TableRow >

  )
}
