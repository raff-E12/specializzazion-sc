//creazione di un lista in tag
import Proptypes from 'prop-types'

function ListAppend(props){
    //const lowCalFruits = list.filter((element)=>element.calories <= 100);
    const itemsprops = props.items;
    const category = props.category;
    const list_tag = itemsprops.map(element => <li key={element.id}><p>{element.name}:&nbsp;<b>{element.calories}</b></p></li>)
    return(<><h3 className="title-list">{category}</h3><ol className="listAppend">{list_tag}</ol></>);
}

ListAppend.propTypes = {
    category: Proptypes.string,
    items: Proptypes.arrayOf(Proptypes.shape({id: Proptypes.number, name: Proptypes.string, calories: Proptypes.number}))
}

export default ListAppend