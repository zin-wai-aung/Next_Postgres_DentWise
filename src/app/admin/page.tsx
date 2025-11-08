import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

async function AdminPage() {
     const user = await currentUser();

     console.log('hello user',user)
     //user is not login
     if (!user) redirect("/")
     
     const adminEmail = process.env.ADMIN_EMAIL;
     const userEmail = user.emailAddresses[0].emailAddress;

     //user is not admin
     if(!adminEmail || userEmail !== adminEmail) redirect("/dashboard")
  return (
    <div>You are the Admin</div>
  )
}

export default AdminPage