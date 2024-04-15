import { useState } from 'react';

const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState('Red');
  const [productImage, setProductImage] = useState('https://dummyimage.com/400x400');

  const data = 
    {
      id: 1,
      name: 'VOGUE EYEWEAR',
      price: '$58.00',
      brand: 'Ray-Ban',
      review: 4,
      descriptions: "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.",
      colors: [
        {
          name: 'Red',
          image: 'https://dummyimage.com/400x400'
        },
        {
          name: 'Blue',
          image: 'https://dummyimage.com/450x400'
        },
        {
          name: 'Green',
          image: 'https://dummyimage.com/350x400'
        }
      ]
    }

  const handleColorChange = (color) => {
    setSelectedColor(color.name);
    setProductImage(color.image);
  };

  return (
    <section className="text-gray-600 body-font dark:text-gray-400 overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={productImage}
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
              {data.descriptions}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
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
                {/* Add size selection dropdown */}
              </div>
            </div>
            <div className="flex flex-wrap">
              <span className="title-font font-medium text-2xl text-gray-900 dark:text-white">
                $58.00
              </span>
              <div className='flex ml-auto'>
              <button className="flex text-white mr-1 bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                &apos;Try It On&apos;
              </button>
              <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add To Cart
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
