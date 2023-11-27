import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, {useState} from 'react';
import styles from '../styles/projectForm.module.css';
import { useNavigate } from "react-router-dom";
import api from '../api'

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


const NewProjectForm = ({ setAndPopMessage }) => {
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const buttonName = event.nativeEvent.explicitOriginalTarget.name || event.nativeEvent.target.name;

    const body = {
      name: name,
      selectedFile: selectedFile,
    };

    try {
      const response = await api.createNewProject(body);
      if (response.success && response.location) {
        setAndPopMessage(response.message, response.severity)

        // Redirect to the right page depending on the button
        if (buttonName==="saveOnly") {
          navigate("/projects");
        } else {
          navigate(response.location);
        }

      } else {
        setAndPopMessage(response.message, response.severity);
      }
    } catch (error) {
      setAndPopMessage(error, "error");
    }
  };

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
          <Button type="submit" name="saveOnly" variant="contained" color="lightBlue">Save and exit</Button>
          <Button type="submit" name="saveThenGo" variant="contained" color="darkBlue">Save and start</Button>
        </div>
      </form>
  )
}

export default NewProjectForm