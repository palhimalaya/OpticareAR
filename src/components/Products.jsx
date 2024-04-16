import { ProductsData } from "@/data/ProductsData";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Cart from "./Cart";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { handleAddToCart } from "@/lib/utils";


const Products = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (value) => {
    console.log(value);
    setFilter(value);
  };

  let products = [...ProductsData];

  products.sort((a, b) => {
    if (filter === 'low-high') {
      return a.price - b.price;
    } else if (filter === 'high-low') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center lg:mx-28">
        <h1 className="text-lg font-semibold dark:text-white md:text-2xl">Browse Our Products</h1>
      </div>
      <div className="flex flex-row gap-2 lg:mx-28">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="New" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem default value="new">New</SelectItem>
            <SelectItem value="top">Top Rated</SelectItem>
            <SelectItem value="featured">Featured</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue value="" placeholder="Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low-high">Low-High</SelectItem>
            <SelectItem value="high-low">High-Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <section className="text-gray-600 body-font dark:text-gray-400">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                imageSrc={product.colors[0].image}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductCard = ({ id, imageSrc, title, price }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="relative">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={imageSrc} />
          </a>
        </div>
      <Link to={`/product/${id}`}>
        <div className="mt-4 flex flex-row justify-between">
          <div>
            <h2 className="text-gray-900 title-font text-lg font-medium dark:text-white">{title}</h2>
          </div>
          <div>
            <p className="mt-1 dark:text-gray-300">${price}</p>
          </div>
         
          {/* <Link to={`/product/${2}`}>
            <div className="flex flex-row justify-between items-center text-sm">
              <h3 className="text-gray-500 tracking-widest title-font mb-1">try it on</h3>
              <Repeat2 className="h-6 w-6" />
            </div>
          </Link> */}
        </div>  
      </Link>

      <div className="flex">
        <button className="text-white bg-gray-500 border-0 py-2 px-3 focus:outline-none hover:bg-gray-600 rounded">
          &apos;Try It On&apos;
        </button>
        <Sheet>
          <SheetTrigger onClick={()=>handleAddToCart(id, addToCart)} className="py-2 text-white bg-indigo-500 border-0 px-1 focus:outline-none hover:bg-indigo-600 rounded ml-auto">Add To Cart</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <Cart/>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Products;
