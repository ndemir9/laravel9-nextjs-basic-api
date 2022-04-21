import { useRouter } from "next/router";
import { Input, Spacer, Button } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";

const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState([]);

  const handleAddCustomer = () => {
    console.log(fullName);
    console.log(email);

    fetch(`http://127.0.0.1:8000/api/customers/${id}`, {
      method: "PUT",
      body: JSON.stringify({ fullname: fullName, email: email }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setSuccess(responseJSON);
      });
  };

  return (
    <div className="container">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Spacer y={2.5} />
      <h4>edit</h4>

      <div style={{ color: "green" }}>{success.message}</div>
      <div style={{ marginTop: "50px" }}>
        <Spacer y={2.5} />

        <Input
          clearable
          label="Name"
          width="50%"
          placeholder="Name"
          initialValue={user.fullname}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Spacer y={2.5} />
        <Input
          clearable
          label="Email"
          width="50%"
          placeholder="Email"
          initialValue={user.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Spacer y={2.5} />
        <div>
          <Button auto onClick={handleAddCustomer}>
            Güncelle
          </Button>
        </div>
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
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://127.0.0.1:8000/api/customers/${params.id}`, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default User;
