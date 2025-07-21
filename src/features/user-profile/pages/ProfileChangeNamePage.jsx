import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'
import ProfileChangeNameSection from '../components/ProfileChangeNameSection'

const ProfileChangeNamePage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 dark:text-gray-50 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"Change Name"} links={[{ title: "User Profile", path: "/dashboard/user-profile" }]} />
          <ProfileChangeNameSection />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default ProfileChangeNamePage