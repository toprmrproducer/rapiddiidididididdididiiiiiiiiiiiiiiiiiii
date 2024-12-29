import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { AlphaTeam } from './pages/teams/AlphaTeam';
import { BravoTeam } from './pages/teams/BravoTeam';
import { DeltaTeam } from './pages/teams/DeltaTeam';
import { PapaTeam } from './pages/teams/PapaTeam';
import { Pricing } from './components/sections/Pricing/Pricing';
import { Contact } from './components/Contact';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MouseGlow } from './components/effects/MouseGlow';
import { GridBackground } from './components/effects/GridBackground';
import { CustomCursor } from './components/effects/CustomCursor';
import { CursorSparkle } from './components/effects/CursorSparkle';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden cursor-none">
      <CustomCursor />
      <CursorSparkle />
      <div className="fixed inset-0 z-0">
        <GridBackground />
      </div>
      
      <MouseGlow />
      
      <div className="relative z-10">
        <Header />
        <main className="pt-16"> {/* Changed from pt-32 to pt-16 */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/teams/alpha" element={<AlphaTeam />} />
      <Route path="/teams/bravo" element={<BravoTeam />} />
      <Route path="/teams/delta" element={<DeltaTeam />} />
      <Route path="/teams/papa" element={<PapaTeam />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);