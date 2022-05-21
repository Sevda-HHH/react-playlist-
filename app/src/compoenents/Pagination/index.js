import './index.css';

function Pagination({ arr, setPage }){
    return (
        <>
            <nav >
                <ul className="pagination">
                    {(arr.map(d => {
                        return (<li key={d} 
                            onClick={() => setPage(d)}
                            className="page-item">
                            <button
                                className="page-link"><b>{d}</b></button>
                        </li>)
                    }))}
                </ul>
            </nav>
        </>
    )
}
export default Pagination;