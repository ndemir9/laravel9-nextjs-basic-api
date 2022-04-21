import { useState, useEffect } from "react";
import Link from "next/link";
export default function fakecustomer() {
  const [success, setSuccess] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test", {
      method: "GET",
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setSuccess(responseJSON);
      });
  }, []);

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div style={{ color: "green" }}>{success.message}</div>
    </div>
  );
}
