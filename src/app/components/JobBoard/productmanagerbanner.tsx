import Image from "next/image";

const ProductManagerBanner = () => {
  return (
    <div className="w-full flex items-center justify-between bg-[#F5FAFF] p-5 rounded-lg shadow-sm">
      {/* Left - Person Illustration */}
      <div className="w-1/3">
        <Image 
          src="/banner.jpg" // Use the correct path
          alt="Product Manager Illustration"
          width={200} 
          height={200} 
        />
      </div>

      {/* Center - Text & Button */}
      <div className="w-1/2 text-left">
        <h1 className="text-3xl font-bold text-[#276094]">
          Become an exceptional Product Manager!
        </h1>
        <p className="text-gray-600 mt-2">
          Learn essential skills, build a strong product portfolio, and crack your next PM interview.
        </p> 
        <button className="mt-4 px-6 py-2 bg-[#E1F4FC] text-[#276094] rounded-lg shadow-md cursor-pointer hover:bg-[#D3E9F8]">
          Learn more
        </button>
      </div>

      {/* Right - Companies Logos */}
      <div className="w-1/2 flex justify-center">
        <Image 
          src="/shopify.jpg" // Use the correct path
          alt="Top Companies"
          width={300} 
          height={300} 
        />
      </div>
    </div>
  );
};

export default ProductManagerBanner;
