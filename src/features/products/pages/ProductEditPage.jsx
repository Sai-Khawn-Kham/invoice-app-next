import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'
import ProductEditSection from '../components/ProductEditSection'

const ProductEditPage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"Edit Product"} links={[{ title: "Products", path: "/dashboard/products" }]} />
          <ProductEditSection />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default ProductEditPage