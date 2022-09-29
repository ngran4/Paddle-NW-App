import React, { useState } from "react";
import { FileInput, Textarea, TextInput, Button, Modal, Group } from '@mantine/core';

// -------------------------- FUNCTION -------------------------- //

export default function AddPhoto() {
  const [selectedFile, setSelectedFile] = useState("")

  function handleFileInput(e){
    setSelectedFile(e)
  }

  function handleSubmit(e){
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', selectedFile)
  }

  return (
    <form autoComplete="off">
      <FileInput
        placeholder="Choose File"
        className="form-control"
        name="playlist-cover"
        type="file"
        // onChange={handleFileInput}
        label="Upload Photo"
        required
        withAsterisk
      />
      <Button type="submit">
        Submit
      </Button>
    </form>
  )
}

// -------------------------- STYLING -------------------------- //