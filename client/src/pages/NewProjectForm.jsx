import * as React from 'react';
import { useState } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import api from '../api'

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'; 

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

export default function NewProjectForm({ setAndPopMessage }) {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (file) => {
      setSelectedFile(file);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
  
      const body = {
        name: data.get('name'),
        selectedFile: selectedFile,
      };

      try {
        const response = await api.createNewProject(body);
        if (response.success && response.location) {
          setAndPopMessage(response.message, response.severity);
          navigate(response.location);
        } else {
          setAndPopMessage(response.message, response.severity);
          navigate("/");
        }
      } catch (error) {
        setAndPopMessage(error, "error");
      }
    };
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Create a new project
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <UploadImageButton onFileSelect={handleFileSelect}></UploadImageButton>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="darkBlue"
              sx={{ mt: 3, mb: 2 }}
            >
              Create and go
            </Button>
          </Box>
        </Box>
      </Container>
  );
}