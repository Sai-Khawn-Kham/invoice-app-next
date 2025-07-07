import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'

const UserProfilePage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default UserProfilePage