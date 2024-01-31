
function App() {
  return (
    <>
    <Title color="green">Mon composants</Title>
    <input type="text"/> : 
      <p>React est une bibliothèque
       JavaScript pour le rendu des 
       interfaces utilisateur (UI).
        L'interface utilisateur est construite à partir 
        de petites unités telles que des boutons, 
        du texte et des images. React vous permet de les 
        combiner en composants réutilisables et
         emboîtables. Des sites Web aux applications téléphoniques,
          tout ce qui apparaît à l’écran peut être décomposé en composants. Dans ce chapitre, vous apprendrez à créer, personnaliser et afficher de manière 
      conditionnelle des composants React.</p>
    </>
  );
}

function Title({color, children}) {
  
  return(
  <h2 style={{color:color}}>{children}</h2>
  ) 
}
  
export default App;