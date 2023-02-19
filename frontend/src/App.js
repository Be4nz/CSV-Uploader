import { useState, useEffect } from 'react'
import FileUploadForm from './components/FileUploadForm'
import Employees from './components/Employees'
import FileUpload from './services/fileUpload'

function App() {

  const [mainFile, setMainFile] = useState(null)
  const [employees, setEmployees] = useState([])

  const fetchData = () => {
    FileUpload.get()
      .then(response => {
        setEmployees(response)
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <h1>CSV Uploader</h1>

      <FileUploadForm mainFile={mainFile} setMainFile={setMainFile} fetchData={fetchData} />

      <Employees employees={employees} />
    </div>
  )

}

export default App;
