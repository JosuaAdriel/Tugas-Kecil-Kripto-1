function ReaderFile({ setPlaintext, setCiphertext }) {
  function onChange(event) {
    var file = event.target.files[0];
    if (!file) return; // Ensure a file is selected

    const reader = new FileReader();

    reader.readAsDataURL(file);

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
    <div className="">
      <label htmlFor="fileUpload">Upload File</label>
      <div className="">
        <input
          id="fileUpload"
          onClick={(e) => (e.target.value = null)}
          onChange={(e) => onChange(e)}
          type="file"
        />
      </div>
    </div>
  );
}

export default ReaderFile;
