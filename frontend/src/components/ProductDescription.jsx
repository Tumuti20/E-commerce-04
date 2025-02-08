import React from "react";

const ProductDescription = () => {
  return (
    <div className="ring-1 ring-slate-900/10 rounded-lg">
      <div className="flex gap-3">
        <button className="medium-14 p-3 w-32 border-b-2 border-secondary">
          Description
        </button>
        <button className="medium-14 p-3 w-32 border-b-2">Care Guide</button>
        <button className="medium-14 p-3 w-32 border-b-2">Size Guide</button>
      </div>
      <hr className="h-[1px] w-full " />
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h5 className="h5">Details</h5>
          <p className="text-sm">
            At Extrovert Introvert, we’re committed to ensuring your shirts,
            tote bags, sweaters, and hoodies look stylish, fit just right, and
            last for years. To keep your items in excellent condition, wash them
            inside out in cold water on a gentle cycle, and avoid harsh
            detergents to protect the colors and prints. Lay your garments flat
            to dry or tumble dry on low heat. When ironing, use a low-heat
            setting and avoid direct contact with prints or embellishments. For
            delicate or embellished pieces, hand washing and air drying are
            recommended. <br />
            Our sizes are designed for a comfortable and flattering fit, with
            shirts available in sizes Small to Extra Large, hoodies and sweaters
            from Small to 2XL, and tote bags with plenty of room for your
            essentials. If you’re looking for a looser, more relaxed fit,
            consider going one size up. Unsure about which size to choose? Don’t
            hesitate to reach out with your measurements, and we’ll help you
            find the perfect fit. With the right care and sizing, your Extrovert
            Introvert pieces will stay as bold and versatile as you are! ❤️
          </p>
        </div>
        <div>
          <h5 className="h5">Benefits</h5>
          <ul className="list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1">
            <li>
              Premium materials guarantee exceptional durability and
              unparalleled comfort.
            </li>
            <li>
              Crafted to complement the demands of modern, active lifestyles.
            </li>
            <li>
              Offered in an extensive range of sizes to ensure the perfect fit
              for every body type and style preference.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
