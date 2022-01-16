import './MyRings.css'
import {useCollection} from '../../hooks/useCollection'


export default function MyRings() {
    const {documents, error} = useCollection('rings')
    return (
        <div className="auth-form">
            <div className="btns">
                <button>Back</button>
                <button>Add</button>
            </div>
            <h2>My Rings</h2>
            {error && <p className="error">{error}</p>}
            {documents && documents.map(doc=> (
                <div className="stack">
                    <p key={doc.id}>{doc.name}</p>
                    <img className="imgControl" key={doc.id} src={doc.image} alt="image"/>
                </div>
            ))}
        </div>
    )
}
