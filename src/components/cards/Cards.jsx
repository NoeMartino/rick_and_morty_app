import Card from '../card/Card';
import style from '../cards/Cards.module.css'

export default function Cards(props) {
   //const { characters } = props;
   return (
      <div className= {style.container}>
         {
            props.characters.map((c) =>
            <Card key={c.id}
            id= {c.id}
            onClose={() => props.onClose(c.id)}
            name={c.name}
            species={c.species}
            gender={c.gender}
            image={c.image}/>)
         }
      </div>
      );
}
