"use client";
import { Button, Group, Stepper } from "@mantine/core";
import { useState } from "react";
import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";

export default function InseratStepper() {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    return (
        <>
        <Stepper size="sm"  active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First step" description="Create an account" allowStepSelect={active > 0}>
            <StepOne />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email" allowStepSelect={active > 1}>
            <StepTwo />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Get full access" allowStepSelect={active > 2}>
            <StepThree /> 
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
  
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>Back</Button>
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </>
    )
}