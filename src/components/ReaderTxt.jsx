function ReaderTxt({ setPlaintext, setCiphertext }) {
  function onChange(event) {
    var file = event.target.files[0];
    if (!file) return; // Ensure a file is selected

    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = (event) => {
      const fileContent = event.target.result; // File content as string
      setPlaintext(fileContent); // Do something with the string
      setCiphertext(fileContent);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  }

  return (
    <div className="input-group">
      <label htmlFor="fileUpload">Upload File</label>
      <input
        id="fileUpload"
        accept=".txt"
        onClick={(e) => (e.target.value = null)}
        onChange={(e) => onChange(e)}
        type="file"
      />
    </div>
  );
}

export default ReaderTxt;
