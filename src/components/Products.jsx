import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import axios from "axios";
import { toast } from "react-toastify";


const Products = () => {
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    const getProducts = async() => {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products");
      }
    }
    getProducts();
  },[baseUrl])

  const handleFilterChange = (value) => {
    setFilter(value);
  };
  let sortedProducts = [...products]
  sortedProducts.sort((a, b) => {
    if (filter === 'low-high') {
      return a.price - b.price;
    } else if (filter === 'high-low') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });
  console.log(sortedProducts)
  return (
    <main className="flex flex-1 flex-col gap-4 lg:gap-6 ">
      <div className="flex items-center container">
        <h1 className="text-lg font-semibold dark:text-white md:text-2xl">Browse Our Products</h1>
      </div>
      <div className="flex flex-row gap-2 container">
        <select className="w-[180px] bg-white dark:bg-black border dark:text-gray-400 border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
          <option value="new" selected>New</option>
          <option value="top">Top Rated</option>
          <option value="featured">Featured</option>
        </select>
        <select className="w-[180px] bg-white border dark:bg-black dark:text-gray-400 border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" value={filter} onChange={e => handleFilterChange(e.target.value)}>
          <option value="">Price</option>
          <option value="low-high">Low-High</option>
          <option value="high-low">High-Low</option>
        </select>
        {
          localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).role === "admin" &&
          <Link to={'/addProducts'} className="ml-auto">
            <button className="text-white bg-gray-500 border-0 focus:outline-none hover:bg-gray-600 rounded p-2">Add Product</button>
          </Link>
        }
      </div>
      <section className="text-gray-600 body-font dark:text-gray-400">
        <div className="container">
          <div className="flex flex-wrap">
            {sortedProducts.map(product => (
              <ProductCard
                key={product._id}
                id={product._id}
                imageSrc={product.image}
                title={product.name}
                price={product.price}
                sku={product.sku}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const ProductCard = ({ id, imageSrc, title, price, sku}) => {
  return (
    <Card className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:z-50 shadow-lg">
      <Link to={`/product/${id}`}>
        <div className="relative">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={imageSrc} />
          </a>
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <div>
            <h2 className="text-gray-900 title-font text-sm font-medium dark:text-white">{title}</h2>
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

      <div className="flex gap-1">
        <Link to={`/try-it-on/${sku}`} className="text-white text-sm bg-gray-500 border-0 focus:outline-none hover:bg-gray-600 rounded p-1">
          &apos;Try It On&apos;
        </Link>
      </div>
    </Card>
  );
};

export default Products;
