import { useState } from 'react';
import axios from 'axios';

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file first.');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const { data } = await axios.post('/api/files/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(`Uploaded: ${data.name}`);
    } catch (err) {
      console.error('Upload failed:', err.response?.data || err.message);
      alert('Upload failed!');
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="p-2 bg-blue-500 text-white">
        Upload
      </button>
    </div>
  );
}
