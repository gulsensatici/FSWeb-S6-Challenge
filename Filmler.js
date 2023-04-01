import Film from "./Film";

function Films(props){
    const {char, i, films}= props;
    
    return(
        <h2 key = {"c"+ i}>
            {char.name}
            <p>
                {Films
                .filter((film)=> char.films.includes(film.title))
                .map((film, i)=>{
                    return <Film film={film} i={i}/>;
                })}
            </p>
        </h2>
    );
    
}
export default Films;