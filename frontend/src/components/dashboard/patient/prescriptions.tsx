import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Pill } from "lucide-react"

function Prescriptions() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold tracking-tight text-muted'>
                    Prescriptions
                </h1>
                <h3 className='text-muted-foreground'>
                    On this page you will find current and expired prescriptions.
                </h3>
            </div>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-3'>
                    <h1 className="text-xl font-semibold tracking-tight text-muted">
                        Current Prescriptions: 2
                    </h1>
                    <div className='flex flex-col gap-6'>
                        <Accordion type="single" collapsible className='text-muted'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className='flex gap-3'>
                                        <div className='flex flex-col items-center justify-center bg-muted/10 rounded-xl shrink-0 size-16'>
                                            <Pill className='size-6 text-primary' />
                                        </div>
                                        <div className='flex flex-col justify-center gap'>
                                            <div className='flex flex-col items-start'>
                                                <h4 className='text-xl font-medium text-muted'>Epiduo 0,3 %/2,5 %</h4>
                                                <h4 className='font-medium text-muted-foreground'>Adapalen + bensoylperoxid, gel</h4>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-6 border-t'>
                                        <div className='flex flex-col mt-3'>
                                            <h4 className='text-xl font-semibold text-muted'>Date of issue</h4>
                                            <h4 className='font-medium text-muted'>11 Sep 2024</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Is issued by</h4>
                                            <h4 className='font-medium text-primary underline'>Dr. John Doe (General Practitioner)</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Active substance</h4>
                                            <h4 className='font-medium text-muted'>Adapalen + bensoylperoxid</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Applies even</h4>
                                            <h4 className='font-medium text-muted'>11 jun 2025</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>How to use</h4>
                                            <p className='font-medium text-muted'>
                                                apply in the evening after skin cleansing, if irritation occurs, a non-comedogenic moisturizer can be used against acne
                                                You and your doctor may have agreed on a change in drug treatment without it appearing here. If you have questions, contact your doctor or your pharmacy.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className='text-muted'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className='flex gap-3'>
                                        <div className='flex flex-col items-center justify-center bg-muted/10 rounded-xl shrink-0 size-16'>
                                            <Pill className='size-6 text-primary' />
                                        </div>
                                        <div className='flex flex-col justify-center gap'>
                                            <div className='flex flex-col items-start'>
                                                <h4 className='text-xl font-medium text-muted'>Paracetamol</h4>
                                                <h4 className='font-medium text-muted-foreground'>Paracetamol, oral tablet</h4>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-6 border-t'>
                                        <div className='flex flex-col mt-3'>
                                            <h4 className='text-xl font-semibold text-muted'>Date of issue</h4>
                                            <h4 className='font-medium text-muted'>15 Mar 2024</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Is issued by</h4>
                                            <h4 className='font-medium text-primary underline'>Dr. Jane Smith (General Practitioner)</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Active substance</h4>
                                            <h4 className='font-medium text-muted'>Paracetamol</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Applies even</h4>
                                            <h4 className='font-medium text-muted'>15 Mar 2026</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>How to use</h4>
                                            <p className='font-medium text-muted'>
                                                Take the tablet orally with a glass of water. Follow the dosage instructions provided by your doctor or pharmacist. Do not exceed the recommended dose. Contact your doctor or pharmacist if you have any questions or concerns.
                                            </p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prescriptions