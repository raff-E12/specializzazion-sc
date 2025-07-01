//condition rendering = usare un componente in base a una condizione su cui accede ai sui parametri in base alle condizione su cui necessitare.

function UserGreeting(props) {
    if (props.isLoggedIn) {
        return <h2 className="boxBen">Benvenuto {props.username}.</h2>;
    } else{
        return <h2 className="boxLogin">Registrati, per favore.</h2>;
    }
}

export default UserGreeting