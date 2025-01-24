import { LevelContext } from "./LevelContext";
import { useContext } from "react";

export default function Section({ children }) {
  const level = useContext(LevelContext);
  // 默认值是1
  console.log(level);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
