export default function TableData({ data }) {
  function openBook(url) {
    return window.open(url, "_blank");
  }
  return (
    <>
      <tr>
        <th>{data.id}</th>
        <td>{data.fileName}</td>
        <td>{data.filePath}</td>
        <td>
          <button
            className="btn"
            onClick={() => {
                openBook(`http://localhost:8888/EBookReader/BackEnd/${data.filePath}`);
            }}
          >
            Detail
          </button>
        </td>
      </tr>
    </>
  );
}
