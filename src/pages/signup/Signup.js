import { useState } from 'react'
import './Signup.css'
import {useSignup} from '../../hooks/useSignup'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [college, setCollege] = useState('')
    const [year, setYear] = useState('')
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(null)
    const {signup, isPending, error} = useSignup()

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)

        if (!selected){
            setThumbnailError('Please select a file')
            return
        }
        if (!selected.type.includes('image')){
            setThumbnailError('Selected file must be an image')
            return
        }
        if (selected.size > 100000){
            setThumbnailError('Image files size must be less than 100kb')
            return
        }

        setThumbnailError(null)
        setThumbnail(selected)
        console.log('thumbnail updated')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email,password,displayName,thumbnail, college, year)
    }
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label htmlFor="">
                <span>email:</span>
                <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>
            <label htmlFor="">
                <span>password:</span>
                <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </label>
            <label htmlFor="">
                <span>display name:</span>
                <input required type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName}/>
            </label>
            <label htmlFor="">
                <span>College/University:</span>
                <input required type="text" onChange={(e) => setCollege(e.target.value)} value={college}/>
            </label>
            <label htmlFor="">
                <span>Academic Year:</span>
                <input required type="text" onChange={(e) => setYear(e.target.value)} value={year}/>
            </label>
            <label htmlFor="">
                <span>profile image:</span>
                <input required type="file" onChange={handleFileChange}/>
                {thumbnailError && <div className="error">{thumbnailError}</div>}
            </label>
            {!isPending && <button className="btn">Sign up</button>}
            {isPending && <button className="btn" disabled>loading</button>}
            {error && <div className="error">{error}</div>} 
        </form>
    )
}