import Accordeon from "./Accordeon";

function Film(props){
    const {film} = props;
    return (
   <div>
    <Accordeon title ={film.title}>
        
        <p>{film.opening_crawl}</p>
    
    </Accordeon>
   </div>
    );
}
export default Film;