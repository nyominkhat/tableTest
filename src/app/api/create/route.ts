import { faker } from "@faker-js/faker";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface User {
  name: string;
  location: string;
  email: string;
}

// const fakeUsers = () => {
//   const faker = new Faker();
//   return {
//     name: faker.internet.userName(),
//     location: faker.location.city(),
//     email: faker.internet.email(),
//   };
// };

export async function POST(request: NextRequest) {
  let count: number = 0;

  while (count < 23) {
    const user = await prisma.user.create({
      data: {
        name: faker.internet.userName(),
        location: faker.location.city(),
        email: faker.internet.email(),
      },
    });

    count++;
  }

  return NextResponse.json({ message: "Create users successful" });
}
