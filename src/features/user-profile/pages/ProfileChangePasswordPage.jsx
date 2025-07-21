import Breadcrumb from '@/components/Breadcrumb'
import Container from '@/components/Container'
import Header from '@/components/Header'
import DashboardLayout from '@/features/dashboard/components/DashboardLayout'
import React from 'react'
import ProfileChangePasswordSection from '../components/ProfileChangePasswordSection'

const ProfileChangePasswordPage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 dark:text-gray-50 min-h-screen">
        <Container>
          <Header />
          <Breadcrumb current={"Change Password"} links={[{ title: "User Profile", path: "/dashboard/user-profile" }]} />
          <ProfileChangePasswordSection />
        </Container>
      </main>
    </DashboardLayout>
  )
}

export default ProfileChangePasswordPage