import { unstable_getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import LoginButton from "../login-btn";
import InsertStepperWithForm from "./inseratStepperWithForm";




export default async function InseratSchalten() {
    
    const session = await unstable_getServerSession(authOptions)    
      

    if (session) {

        if (!session.user.jwt)
        {
            throw new Error('JWT is not defined')
        }

        return (
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="py-24">                    
                    {/* <AuthOnly /> */}
                    {/* <InseratStepper /> */}  
                    {/* <LoginButton />                */}
                    <InsertStepperWithForm jwtValue={session.user.jwt}  />
                   
                </div>
            </div>


        )
    }

    return (<div className="text-bold text-bg">Sie müssen eingeloggt sein, um ein Inserat aufzugeben!
        <LoginButton />

    </div>)


}