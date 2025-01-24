import { LevelContext } from "./LevelContext";
export default function Section({abc, children }) {
  return (
    <section className="section">
      {/* {children} */}
      <LevelContext.Provider value={abc}>{children}</LevelContext.Provider>
    </section>
  );
}
