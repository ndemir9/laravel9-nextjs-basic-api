import Head from "next/head";
import Link from "next/link";
import { Button, Table, User } from "@nextui-org/react";
import UserTable from "../components/usertable";

export default function Home({ users }) {
  console.log(users);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 20
        }}
      >
        <Link href="/fakecustomer" >
          <a>
            <Button>10 tane sahte müşteri ekle</Button>
          </a>
        </Link>
        <Link href="/insert">
          <a>
            <Button>Müşteriyi ekle</Button>
          </a>
        </Link>
      </div>

      <UserTable users={users} />

      <style jsx>{`
        .container {
          width: 50%;
          height: 50%;
          margin: 0 auto;
          margin-top: 10rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

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

export async function getServerSideProps() {
  const res = await fetch(`http://127.0.0.1:8000/api/customers`, {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  });
  const users = await res.json();

  return { props: { users } };
}
