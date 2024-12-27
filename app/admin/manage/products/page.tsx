import React from "react";

import ManageProducts from "@/pages/custom/manage-products";

const Page = () => {
  return (
    <section className="w-full rounded-md bg-sidebar p-4">
      <h1 className="text-4xl font-bold">Products</h1>
      <ManageProducts />
    </section>
  );
};

export default Page;
