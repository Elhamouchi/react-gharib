export default function Card({prd, onAdd}) {
  const handleClick = (prd)=>{
    onAdd(prd)
  }
  
  return (
    <div
      className="card"
      style={{
        width: "300px",
        position: "relative",
        border: "solid 1px black",
        borderRadius: "5px",
        overflow: "hidden",
        marginBottom: "5px",
      }}
    >
      {prd.sale && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            color: "white",
            width: "40px",
            top: "10px",
            right: "5px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          sale
        </div>
      )}
      <div className="card-img" style={{ width: "100%" }}>
        <div
          style={{ backgroundColor: "green", width: "100%", height: "300px" }}
        ></div>
      </div>
      <div className="card-body" style={{ padding: "10px" }}>
        <h2 style={{ margin: "0", padding: "0" }}>{prd.title}</h2>
        <p>
          {prd.old_price && (
            <span
              style={{ marginRight: "10px" }}
            >
              <span
                style={{ textDecoration: "line-through"}}
              >
                {prd.old_price}
              </span>
              $
            </span>
          )}
          {prd.cur_price}$
        </p>
        <button onClick={(e)=>{handleClick(prd)}}
          style={{
            backgroundColor: "transparent",
            padding: "7px",
            border: "solid 1px black",
            borderRadius: "5px",
          }}
        >
          add to card
        </button>
      </div>
    </div>
  );
}
