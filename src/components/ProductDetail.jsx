import { ProductsData } from '@/data/ProductsData';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { handleAddToCart } from '@/lib/utils';
import Cart from './Cart';
import { CartContext } from '@/context/CartContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const ProductDetail = () => {
  // const [selectedColor, setSelectedColor] = useState('Red');
  // const [productImage, setProductImage] = useState('https://dummyimage.com/400x400');
  const [isFavourite, setIsFavourite] = useState(false);
  const [data, setData] = useState({});

  const { id } = useParams();
  const baseUrl = import.meta.env.VITE_APP_BASE_URL;
  const { addToCart } = useContext(CartContext);

  // const handleColorChange = (color) => {
  //   setSelectedColor(color.name);
  //   setProductImage(color.image);
  // };

  useEffect(() => {
    try {
      const getProduct = async () => {
        const response = await axios.get(`${baseUrl}/products/${id}`);
        setData(response.data);
      };
      getProduct();
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product");
    }
  }, [id, baseUrl]);

  const handleFavouriteClick = () => {
    setIsFavourite(!isFavourite);
  };
  return (
    <section className="text-gray-600 body-font dark:text-gray-400 overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={data.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 dark:text-gray-300 tracking-widest">
              {data.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-white">
              {data.name}
            </h1>
            <div className="flex mb-4">
            <span className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  fill={i < data.review ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500 dark:text-yellow-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              ))}
              <span className="text-gray-600 dark:text-gray-300 ml-3">{data.review} Reviews</span>
            </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                {/* Add action buttons */}
              </span>
            </div>
            <p className="leading-relaxed">
              {data.description}
            </p>
            {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                {data.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`h-6 mr-1 w-6 rounded-full ${color.name === selectedColor ? 'border-2 border-black' : ''}`}
                    style={{ backgroundColor: color.name }}
                    onClick={() => handleColorChange(color)}
                  />
                ))}
              </div>
              <div className="flex ml-6 items-center">
              </div>
            </div> */}
            <div className="flex flex-wrap mt-6">
              <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">
                ${data.price}
              </span>
              <div className='flex ml-auto'>
              <button className="flex text-white mr-1 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                &apos;Try It On&apos;
              </button>
              <Sheet>
                <SheetTrigger onClick={()=>addToCart(data)} className="py-2 text-white bg-indigo-500 border-0 px-1 focus:outline-none hover:bg-indigo-600 rounded ml-auto">Add To Cart</SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-bold mb-4">Shopping Cart</SheetTitle>
                    <Cart/>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
              <button 
                className={`rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 ${isFavourite ? 'text-red-500' : 'text-gray-500'} ml-4`}
                onClick={handleFavouriteClick}
              >
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
