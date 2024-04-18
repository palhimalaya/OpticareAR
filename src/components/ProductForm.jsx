import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { ProductsData } from "@/data/ProductsData"

const ProductForm = ({id}) => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    image: "",
  })
  useEffect(()=>{
    if(!id) return
    const data = ProductsData.find((product) => product.id === parseInt(id));
    setProduct(data)
    // getProduct()
  }
  , [id])
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(product)
  }
  return (
    <div className="flex items-center justify-center">
        <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Product Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}  className="grid gap-4 w-72">
            <div className="grid gap-2">
              <Label htmlFor="firstName">Product Name</Label>
              <Input
                id="name"
                type="text"
                value={product.name}
                name="name"
                placeholder="eye wear"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Brand Name</Label>
              <Input
                id="brand"
                type="text"
                name= "brand"
                value={product.brand}
                placeholder="Ray Ban"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Price</Label>
              <Input
                id="price"
                type="text"
                name ="price"
                value={product.price}
                placeholder="49"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact">Image</Label>
              <Input
                id="image"
                type="text"
                value={product.image}
                name ="image"
                placeholder="https://dummyimage.com/400x400"
              />
            </div>
            <Button type="submit" className="w-full">
              {id?'Update Product': 'Create Product'}
            </Button>
          </form>
        </CardContent>
        </Card>
      </div>
  )
}

export default ProductForm