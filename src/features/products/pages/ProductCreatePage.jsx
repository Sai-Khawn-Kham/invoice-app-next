import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'
import ProductCreateSection from '../components/ProductCreateSection'

const ProductCreatePage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"Create Product"} links={[{ title: "Products", path: "/dashboard/products" }]} />
          <ProductCreateSection />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default ProductCreatePage