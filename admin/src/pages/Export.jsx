import React from 'react';
import axios from 'axios';
import JSZip from 'jszip';

const Export = () => {
  const handleExport = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/export`);
      const allData = response.data;
      
      const zip = new JSZip();
      
      for (const key in allData) {
        if (Object.hasOwnProperty.call(allData, key)) {
          const jsonData = JSON.stringify(allData[key], null, 2);
          zip.file(`${key}.json`, jsonData);
        }
      }
      
      zip.generateAsync({ type: 'blob' }).then((content) => {
        const url = window.URL.createObjectURL(content);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'export.zip');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
      
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Export Data</h1>
      <button
        onClick={handleExport}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Export All Data
      </button>
    </div>
  );
};

export default Export;

