import { fullapi, getapi } from "../services/api";
import useSWR from 'swr'

interface Apod {
    date: string;
    explanation: string;
    hdurl: string;
    title: string;
    url: string;
}



 const MostrarInfo:React.FC = ( ) =>{
    const {data, error} = useSWR<Apod>(fullapi,getapi,{
       suspense: false,
    })
    return(
        <div>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.date}</p>
          <img src={data.hdurl} alt={data.title} width={700} />
          <p>{data.explanation}</p>
        </div>
      )}
      {error && <p>Error al cargar la información</p>}
    </div>
    )
}
export default MostrarInfo;












