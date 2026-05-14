import { usePortfolio } from "./hooks/usePortfolio";
import Projects from "./components/sections/Projects";
 
const App = () => {
  const { data, loading, error } = usePortfolio();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <section id="about">
        <h1>{data?.about.name}</h1>
        <h3>{data?.about.description}</h3><br />
        <p>{data?.about.bio}</p>
      </section>
      <Projects projects={data?.projects} />
    </main>
  );
};

export default App;