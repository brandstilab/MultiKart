import Pagination from "./Pagination";

const TableBottom = ({ current_page, total, per_page, setPage }) => {
  
  return (
    <div className="card-bottom">
      <Pagination current_page={current_page} total={total} per_page={per_page} setPage={setPage} />
    </div>
  );
};

export default TableBottom;
