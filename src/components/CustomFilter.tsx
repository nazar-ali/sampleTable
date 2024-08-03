


const CustomFilter = ({filterQuery,handleFilter}) => {
    return(
        <>
        <div style={{ display: "flex", justifyContent: "end", padding: "10px" }}>
          <input style={{padding:"7px"}} type="text" value={filterQuery} onChange={handleFilter} placeholder="Filter by Legal name" />
        </div>
        </>
    )
}

export default CustomFilter;