import { usePortfolio } from "./hooks/usePortfolio";
import { useToast } from './hooks/useToast';

import { Projects } from "./components/sections/Projects";
import { ToastNotificaiton } from './components/common/Toast';
import { Hero } from './components/sections/Hero';
import { Nav } from './components/sections/Nav';
import { About } from './components/sections/About';
import { Footer } from './components/sections/Footer';
import { Contact } from './components/sections/Contact';
import { useFadeIn } from "./hooks/useFadeIn";
 
const App = () => {
  const { data, loading, error } = usePortfolio();
  const { toast, showToast } = useToast();

  // Smoothly scroll to a specific part clicked on
  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
  };

  const handleCopy = (value: string) => {
    // Copy text to clipboard
    navigator.clipboard.writeText(value)
    // Then display copy status
    .then(
      () => showToast("Copied to clipboard!", false),
      () => showToast("Copy failed", true)
    );
  }

  useFadeIn([data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Main display
  return (
    <main>
      <Nav onNavigate={handleNavigate}/>
      <Hero onNavigate={handleNavigate} description={data?.about.description}/>
      <hr className="divider"/>
      <About data={data?.about}/>
      <hr className="divider"/>
      <Projects projects={data?.projects} />
      <Contact items={data?.contact} onCopy={handleCopy} />
      <Footer />
      {toast && <ToastNotificaiton message={toast.message} isError={toast.isError} />}
    </main>
  );
};

export default App;