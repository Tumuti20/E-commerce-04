import React from "react";
import { TbArrowBackUp, TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

const ProductFeatures = () => {
  return (
    <section className="bg-primary rounded-xl mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl">
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div className="text-3xl">
            <TbArrowBackUp className="mb-3 text-yellow-500" />
          </div>
          <div>
            <h4 className="h4 capitalize">
              Hassle-free returns for your convenience.
            </h4>
            <p>
              We offer hassle-free returns to ensure your shopping experience is
              seamless. If something doesn’t work out, you can easily return or
              exchange your item with minimal effort. Your satisfaction is our
              priority!
            </p>
          </div>
        </div>
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div className="text-3xl">
            <TbTruckDelivery className="mb-3 text-red-500" />
          </div>
          <div>
            <h4 className="h4 capitalize">Swift Delivery</h4>
            <p>
              We pride ourselves on providing fast and reliable delivery to get
              your favorite pieces to your doorstep in no time. Our efficient
              shipping process ensures your order is handled with care and
              arrives promptly, so you can start enjoying your new wardrobe
              without delay.
            </p>
          </div>
        </div>
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div className="text-3xl">
            <RiSecurePaymentLine className="mb-3 text-secondary" />
          </div>
          <div>
            <h4 className="h4 capitalize">Advanced Secure Payment Solutions</h4>
            <p>
              Advanced secure payment solutions are designed to protect
              sensitive financial information during transactions, ensuring
              safety and privacy for both businesses and customers. These
              solutions use cutting-edge encryption, multi-factor
              authentication, and real-time fraud detection to safeguard online
              payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
