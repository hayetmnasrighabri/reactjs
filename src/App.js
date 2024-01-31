const style={color: 'red', backgroundColor: 'blue'}
const showtitle= false
function App() {
  //const handleClick=(e)=>{
    //    e.preventDefault()
      //  e.stopPropagation()
        //alert("j'ai click sur le titre")
      
  
  return (
    <>
   {
    showtitle ?  
    <h2 id="title" className="title" style={style}>bonjour</h2>
    : <p>demo</p>
    }
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
export default App;