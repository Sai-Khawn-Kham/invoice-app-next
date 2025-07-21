import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'
import UserProfileSection from '../components/UserProfileSection'
import Breadcrumb from '@/components/Breadcrumb'

const UserProfilePage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"User Profile"} />
          <UserProfileSection />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default UserProfilePage