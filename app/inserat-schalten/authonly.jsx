
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]";


export default async function AuthOnly(req, res) {
    const session = await unstable_getServerSession(req, res, authOptions)

    if (session) {
        return ('hallo diesen inhalt können nur eingeloggte User sehen')
    }

    return (
        'hallo diesen inhalt können alle sehen'
    )

    
}