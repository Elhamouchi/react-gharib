export default function Alert({ color = "danger", children, callBack }) {
  const className = "alert alert-" + color;

  return (
    <div className={className} style={{ position: "relative"}}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          position: "absolute",
          top: "50%",
          right: "15px",
          transform: "translate(-50%, -50%)", // Adjust to center vertically
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        onClick={callBack}
      >
        X
      </div>
      {children}
    </div>
  );
}
