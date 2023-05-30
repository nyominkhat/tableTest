import React from "react";
import { DataTable } from "./users/data-table";
import { columns, User } from "./users/columns";
import prisma from "@/lib/prisma";

async function getData(): Promise<User[]> {
  const users = await prisma.user.findMany({});

  return users;
}

const Page = async () => {
  const data = await getData();

  return (
    <main className="container py-5 mx-auto select-none">
      <h1 className="mb-5 text-4xl font-semibold text-center text-slate-300">
        Users
      </h1>

      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default Page;
