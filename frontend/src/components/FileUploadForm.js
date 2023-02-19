import { useState } from 'react'
import fileUpload from "../services/fileUpload"

const FileUpload = ({ mainFile, setMainFile, fetchData }) => {

    const [title, setTitle] = useState('Select file...')


    const handleFile = e => {
        let file = e.target.files[0]
        setMainFile(file)
        setTitle(file.name)
    }

    const handleUpload = () => {

        const formData = new FormData()
        formData.append('file', mainFile)

        fileUpload.post(formData).then(() =>
            fetchData()
        ).catch(error =>
            alert(error.response.data)
        )

    }

    return (

        <div className='upload'>
            <label htmlFor="file-upload" className="custom-file-upload">
                {title}
            </label>
            <input id="file-upload" type="file" onChange={handleFile} />
            <button className="custom-file-upload" onClick={handleUpload}>Upload</button>
            <div></div>
        </div>

    )
}

export default FileUpload