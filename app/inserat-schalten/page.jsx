
import LoginButton from "../login-btn";
import AuthOnly from "./authonly";
import InseratStepper from "./inseratStepper";
import InsertStepperWithForm from "./inseratStepperWithForm";




export default async function InseratSchalten() {
    
   
    
    return (
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="py-24">
            {/* <LoginButton />
                <AuthOnly /> */}
                {/* <InseratStepper /> */}
                <InsertStepperWithForm />


            </div>
        </div>

    
    )      

}