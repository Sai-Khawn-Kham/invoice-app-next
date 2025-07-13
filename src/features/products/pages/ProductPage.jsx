import Container from "@/components/Container";
import Header from "@/components/Header";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import React from "react";
import ProductSection from "../components/ProductSection";
import Breadcrumb from "@/components/Breadcrumb";

const ProductPage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"Products Module"} />
          <ProductSection />
        </Container>
      </main>
    </DashboardLayout>
  );
};

export default ProductPage;
