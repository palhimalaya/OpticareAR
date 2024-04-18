import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { ProductsData } from "@/data/ProductsData";
import ProductForm from "@/components/ProductForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddProducts = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo?.role !== "admin"){
      navigate('/')
    }
  }, [navigate]);
  const handleDelete = (e)=>{
    console.log('delete')
  }
  return (
    <div className="">
      <div className=" flex m-5">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="mt-4 lg:mt-0 lg:ml-auto lg:mr-32">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Product</Button>
            </DialogTrigger>
            <DialogContent>
              <ProductForm productAction={"create"} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Brand</TableHead>
            <TableHead className="hidden md:table-cell">Price</TableHead>
            <TableHead className="hidden md:table-cell">Created at</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ProductsData.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={product.image}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {product.brand}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  ${product.price}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {product.createdAt}
                </TableCell>
                <TableCell>
                  <div className="flex flex-row gap-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="cursor-pointer">
                          Edit
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <ProductForm id={product.id} />
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant="outline" className="cursor-pointer bg-red-500 text-white hover:bg-red-400 hover:text-white">
                          Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the product.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AddProducts;
