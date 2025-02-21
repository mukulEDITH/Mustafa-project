import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FolderTree() {
  const [folders, setFolders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchFolders = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('http://localhost:5000/api/folders');
        setFolders(data);
      } catch (err) {
        setError('Failed to load folders. Ensure the backend server is running at port 5000 and the API route is correct.');
        console.error('Fetch folders error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFolders();
  }, []);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:5000/api/files/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('File uploaded successfully!');
      console.log('Upload response:', response.data);
    } catch (err) {
      console.error('Upload error:', err.response ? err.response.data : err);
      alert('Upload failed. Make sure the backend server is running at port 5000 and the "/api/files/upload" route is correctly set up.');
    }
  };

  if (loading) return <p>Loading folders...</p>;
  if (error) return <p className="text-red-500"></p>;

  return (
    <div>
      <h3 className="font-bold">Folders</h3>
      {folders.length > 0 ? (
        <ul className="ml-4 list-disc">
          {folders.map((folder) => (
            <li key={folder._id}>{folder.name}</li>
          ))}
        </ul>
      ) : (
        <p>No folders found.</p>
      )}

      <div className="mt-6">
        <h4 className="font-semibold">Upload File</h4>
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          className="my-2 border rounded p-1" 
        />
        <button 
          onClick={handleUpload} 
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Upload
        </button>
      </div>
    </div>
  );
}
