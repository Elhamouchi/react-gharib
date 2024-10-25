export default function Details({item, closeDetails}){

  console.log(item)
  if (!item){
    return null;
  }
    function handlerClick() {
      closeDetails();
    }
    return (
      <>
        <h1>Details</h1>
        <ul>
          {Object.keys(item).map((key, ind)=>{
            const value = item[key];
            return <li key={ind}>{key}: {value}</li>
          })}
        </ul>
          <button className="btn btn-danger" onClick={handlerClick}>close</button>
      </>
    );
}