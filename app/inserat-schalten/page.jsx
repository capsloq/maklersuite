


import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LoginButton from "../login-btn";
import InseratStepper from "./inseratStepper";
import InsertStepperWithForm from "./inseratStepperWithForm";


// Backend Calls (Daten Holen für die Immobilie, die der User angeklickt hat. Die ID ist in pramas.slug
async function postImmobilie(immobile) {
    // if no id, throw error
    if (!immobile) {
        throw new Error('No Immobilien Id provided');
    }
 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/immobilen/${id}?populate=*`
    , { method: 'POST', body: JSON.stringify({data:immobile}) });
    

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to create immobile');
    }

    return res.json();
}

export default async function InseratSchalten() {

    const session = await unstable_getServerSession(authOptions)

    if (session) {

        return (
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="py-24">                    
                    {/* <AuthOnly /> */}
                    {/* <InseratStepper /> */}
                    <InsertStepperWithForm />
                </div>
            </div>


        )
    }

    return (<div>Sie müssen eingeloggt sein, um ein Inserat aufzugeben!
        <LoginButton />
    </div>)


}