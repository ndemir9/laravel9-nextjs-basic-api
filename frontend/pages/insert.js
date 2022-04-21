import { Input, Spacer, Button } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

export default function insert() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState([]);

  const handleAddCustomer = () => {
    fetch("http://127.0.0.1:8000/api/customers", {
      method: "POST",
      body: JSON.stringify({ fullname: fullName, email: email }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setSuccess(responseJSON);
        setFullName("");
        setEmail("");
      });
  };

  return (
    <div className="container">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Spacer y={2.5} />
      <h4>müşteri ekle </h4>
      <div style={{ color: "green" }}>{success.message}</div>
      <div>
        <Spacer y={1.5} />
        <Input
          clearable
          label="Fullname"
          placeholder="Fullname"
          initialValue=""
          width="50%"
          onChange={(e) => setFullName(e.target.value)}
        />
        <Spacer y={1.5} />
        <Input
          clearable
          label="Email"
          placeholder="Email"
          initialValue=""
          width="50%"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Spacer y={1.5} />
        <Button onClick={handleAddCustomer}>Müşteriyi ekle</Button>
      </div>

      <style jsx>{`
        .container {
          width: 50%;
          height: 50%;
          margin: 0 auto;
          margin-top: 10rem;
        }
      `}</style>
    </div>
  );
}
