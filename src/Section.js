import { LevelContext } from "./LevelContext";

export default function Section({children}){
    return (
        <section className="section">
            <LevelContext.Provider value={level}>
            {children}
            </LevelContext.Provider>
            
        </section>
    )
}