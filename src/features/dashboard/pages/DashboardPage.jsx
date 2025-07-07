import DashboardLayout from "../components/DashboardLayout";
import Container from "@/components/Container";
import Header from "@/components/Header";
import ModuleListSection from "../components/ModuleListSection";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Container>
          <Header />
          <ModuleListSection />
        </Container>
      </main>
    </DashboardLayout>
  );
};

export default DashboardPage;
