import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { ShieldCheckIcon } from "@heroicons/react/solid";

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

        {/* Free Delivery Section */}
        <div className="flex flex-col items-center p-6  ">
          <span className="p-3 bg-black text-white rounded-full">
            <TbTruckDelivery className="w-8 h-8" />
          </span>
          <h3 className="text-lg font-semibold mt-3">FREE AND FAST DELIVERY</h3>
          <p className="text-gray-600 text-sm">Free delivery for all orders over $140</p>
        </div>

        {/* Customer Service Section */}
        <div className="flex flex-col items-center p-6  ">
          <span className="p-3 bg-black text-white rounded-full">
            <RiCustomerServiceLine className="w-8 h-8" />
          </span>
          <h3 className="text-lg font-semibold mt-3">24/7 CUSTOMER SERVICE</h3>
          <p className="text-gray-600 text-sm">Friendly 24/7 customer support</p>
        </div>

        {/* Money Back Guarantee Section */}
        <div className="flex flex-col items-center p-6 ">
          <span className="p-3 bg-black text-white rounded-full">
            <ShieldCheckIcon className="w-8 h-8" />
          </span>
          <h3 className="text-lg font-semibold mt-3">MONEY BACK GUARANTEE</h3>
          <p className="text-gray-600 text-sm">We return money within 30 days</p>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;
