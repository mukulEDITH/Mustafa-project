import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload.js';
import FolderTree from './components/FolderTree.js';
import DocumentViewer from './components/DocumentViewer.js';
import Breadcrumb from './components/Breadcrumb.js';
import './App.css'

function App() {
  return (
    <Router>
      <div className="grid grid-cols-4 gap-4 h-screen">
        <FolderTree />
        <div className="col-span-2">
          <Breadcrumb />
          <FileUpload />
        </div>
        <DocumentViewer />
      </div>
    </Router>
  );
}
export default App;