import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'
import VoucherDetailSection from '../components/VoucherDetailSection'

const VoucherDetailPage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"Voucher Detail"} links={[{ title: "Vouchers", path: "/dashboard/vouchers" }]} />
          <VoucherDetailSection />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default VoucherDetailPage