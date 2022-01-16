import './MyRings.css'
import {useCollection} from '../../hooks/useCollection'

export default function MyRings() {
    const {documents, error} = useCollection('rings')
    return (
        <div>
            <h2>My Rings</h2>
            {error && <p className="error">{error}</p>}
            {documents && documents.map(doc=> (
                <div>
                <p key={doc.id}>{doc.name}</p>
                <img key={doc.id} src={doc.image} alt="image"/>
                </div>
            ))}

            <button>Back</button>
            <button>Add</button>
            <div>

            </div>
        </div>
    )
}