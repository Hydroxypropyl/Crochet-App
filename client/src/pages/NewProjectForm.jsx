import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, {useState} from 'react';
import styles from '../styles/projectForm.module.css';

const UploadImageButton = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  React.useEffect(() => {
    onFileSelect(selectedFile);
  }, [onFileSelect, selectedFile]);

  return (
    <div>
      Add an image :
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
      {selectedFile && <p><it>Selected file: </it>{selectedFile.name}</p>}
    </div>
  );
};


const NewProjectForm = () => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}, the file is: ${selectedFile}`);
  }

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };


  return (
      <form onSubmit={handleSubmit} className={styles.projectForm}>
        <div>
          <label>Project name:
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <UploadImageButton onFileSelect={handleFileSelect}></UploadImageButton>
        <div className={styles.saveButtons_container}>
          <Button type="submit" variant="contained" color="lightBlue">Save and exit</Button>
          <Button type="submit" variant="contained" color="darkBlue">Save and start</Button>
        </div>
      </form>
  )
}

export default NewProjectForm