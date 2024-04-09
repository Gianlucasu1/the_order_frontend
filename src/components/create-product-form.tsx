/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/0Ro1MEAjnpg
 */
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

import { useForm } from "react-hook-form"
import { createProduct } from "../api/task.api"
import { useNavigate, useParams } from 'react-router-dom';


export function CreateProductForm() {


  const { id } = useParams();

  const navigate = useNavigate();

  



  const { register, handleSubmit, formState:{
    errors
  } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await createProduct(data)
    navigate("/productos")
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear producto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label className="text-sm" htmlFor="nombre">
                Nombre
              </Label>
              <Input {...register("nombre")} id="nombre" placeholder="Entra el nombre del producto" required />
              {errors.nombre && <span>Este campo es requerido</span>}
            </div>
            <div className="grid gap-1">
              <Label className="text-sm" htmlFor="descripcion">
                Descripción
              </Label>
              <Textarea {...register("descripcion")} className="min-h-[100px]" id="description" placeholder="Entra la descripcion" required />
              {errors.descripcion && <span>Este campo es requerido</span>}
            </div>
            <div className="grid gap-1">
              <Label className="text-sm" htmlFor="precio">
                Precio
              </Label>
              <Input {...register("precio")} id="precio" placeholder="Entra el precio" required />
              {errors.precio && <span>Este campo es requerido</span>}
            </div>
          </div>
          <Button className="mt-4" size="sm">Crear</Button>
        </form>
      </CardContent>
    </Card>
  )
}
