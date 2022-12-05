import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LoginButton from "../login-btn";
import CreateImmobilie from "./createImmobilie";
import InsertStepperWithForm from "./inseratStepperWithForm";



export default async function InseratSchalten() {
    
    const session = await unstable_getServerSession(authOptions)

    if (session) {

        return (
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="py-24">                    
                    {/* <AuthOnly /> */}
                    {/* <InseratStepper /> */}
                    <InsertStepperWithForm>
                        {/* CHILDREN darf Serverkomponente sein*/}
                        <CreateImmobilie />
                    </InsertStepperWithForm>
                </div>
            </div>


        )
    }

    return (<div>Sie müssen eingeloggt sein, um ein Inserat aufzugeben!
        <LoginButton />
    </div>)


}