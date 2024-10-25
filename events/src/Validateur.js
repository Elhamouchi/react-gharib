import React, { useState } from "react";
export default function Validator() {
  const [password, setPassword] = useState("");
  return (
    <div>
      <div>
        <label>Entrer votre password:</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {password.length < 4 ? "Password doit avoir au moins t 4 caractères" : ""}
    </div>
  );
}
