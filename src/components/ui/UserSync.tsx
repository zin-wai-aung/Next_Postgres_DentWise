"use client"
import { syncUser } from '@/src/lib/actions/users';
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react';

function UserSync() {
     const { isSignedIn, isLoaded } = useUser();
     
     useEffect(() => {
          const handleUserSync = async() => {
               if (isLoaded && isSignedIn) {
                    try {
                         await syncUser();
                    } catch (error) {
                       console.log('Failed to user sync')  
                    }
               }
          }

          handleUserSync(); 
     }, [isLoaded, isSignedIn])
     
     return null;
}

export default UserSync