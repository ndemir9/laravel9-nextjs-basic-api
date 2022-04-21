import { Table } from "@nextui-org/react";
import Link from "next/link";

export default function UserTable({ users }) {
  return (
    <>
      <Table>
        <Table.Header>
          <Table.Column>id</Table.Column>
          <Table.Column>Full Name</Table.Column>
          <Table.Column>E-mail</Table.Column>
          <Table.Column>Edit</Table.Column>
          <Table.Column>Delete</Table.Column>
        </Table.Header>
        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.fullname}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Link href={`/edit/${user.id}`}>
                <a>edit</a>
                </Link>
              </Table.Cell>
              <Table.Cell>
              <Link href={`/delete/${user.id}`}>
                <a>delete</a>
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
