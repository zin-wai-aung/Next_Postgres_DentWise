"use server";
import { prisma } from "../prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  try {
    const user = await currentUser();
    if (!user) {
      throw new Error("User not authenticated");
    }

    const existingUser = await prisma.user.findUnique({
      where: { clerkId: user.id },
    });

    if (existingUser) return existingUser;

    const dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0].emailAddress,
        phone:user.phoneNumbers[0].phoneNumber
      }
    })

    return dbUser
  } catch (error) {
    console.log('Error in SyncUser server action',error)
  }
}
