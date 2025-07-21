import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'
import VoucherSection from '../components/VoucherSection'

const VoucherPage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"Voucher Module"} />
          <VoucherSection />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default VoucherPage