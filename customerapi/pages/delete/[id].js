import { useRouter } from "next/router";
import { Input, Spacer, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Link from "next/link";

const User = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(user);

  const [success, setSuccess] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/customers/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json;charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setSuccess(responseJSON);
      });
  }, []);

  return <div style={{color: "red"}}>{success.message}
   <div> <Link href="/"><a>Home</a></Link></div>
  </div>;
};


export default User;
