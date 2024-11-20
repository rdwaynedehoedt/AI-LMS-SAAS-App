import React from 'react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/configs/db';
import { USER_TABLE } from '@/configs/schema';
import { eq } from 'drizzle-orm';

function Provider({ children }) {

    const { user } = useUser();
    const CheckIsNewUser = async () => {

        const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))

    }

    return (
        <div>
            {children}
        </div>
    )
}

export default Provider