import { FormActions } from "../reducers/form-reducer"

type NavbarProps = {
    dispatch: React.Dispatch<FormActions>
}

const Navbar = ({dispatch} : NavbarProps) => {
    return (
        <div className="bg-indigo-500 p-2 flex justify-between items-center">
            <div>
                <h1 className="text-white text-2xl font-bold">Contador de Calorias</h1>
            </div>
            <div>
                <button onClick={()=> dispatch({type: 'restart_form'})} className="bg-white text-indigo-500 font-semibold py-1 px-2 rounded-lg">Reiniciar app</button>
            </div>
        </div>
    )
}

export default Navbar