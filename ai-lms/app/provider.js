"use client"

import { db } from '@/configs/db';
import { USER_TABLE } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import { useEffect } from 'react';

function Provider({ children }) {

    const { user } = useUser();

    useEffect(() => {
        user && CheckIsNewUser();
    }, [user])

    const CheckIsNewUser = async () => {

        const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))
        console.log(result);
        if (result?.length == 0) {
            const userRESP = await db.insert(USER_TABLE).values({
                userName: user?.username,
                email: user?.primaryEmailAddress?.emailAddress,
            }).returning({ id: USER_TABLE.id });

            console.log(userRESP);
        }
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default Provider