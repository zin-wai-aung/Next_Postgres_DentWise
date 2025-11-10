import Navbar from '@/src/components/Navbar';
import WelcomeSection from '@/src/components/dashboard/WelcomeSection';
import MainActions from '@/src/components/dashboard/MainActions';
import ActivityOverview from '@/src/components/dashboard/ActivityOverview';

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <WelcomeSection />
        <MainActions />
        <ActivityOverview />
      </div>
    </>
  );
}

export default Dashboard