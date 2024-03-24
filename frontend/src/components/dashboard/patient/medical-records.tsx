import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function MedicalRecords() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold tracking-tight text-muted'>
                    Medical Records Overview
                </h1>
                <h3 className='text-muted-foreground'>
                    Here are all your available medical records, in chronological order with the newest at the top.
                </h3>
            </div>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl font-semibold text-muted tracking-tight'>2024</h1>
                    <div className='flex flex-col gap-6'>
                        <Accordion type="single" collapsible className='text-muted'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className='flex gap-3'>
                                        <div className='flex flex-col items-center justify-center bg-muted/10 rounded-xl shrink-0 size-20'>
                                            <h3 className='text-lg font-medium text-primary'>11</h3>
                                            <h3 className='text-lg font-medium text-primary'>Sep</h3>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <div className='flex gap-2'>
                                                <h4 className='text-base font-medium text-muted'>Dr. Susanna Anderson (General Practitioner)</h4>
                                            </div>
                                            <div className='flex gap-2'>
                                                <h4 className='text-base font-medium text-muted'>Diagnosis:</h4>
                                                <h4 className='text-base font-medium text-muted'>Common Cold</h4>
                                            </div>
                                            <div className='flex gap-2'>
                                                <h4 className='text-base font-medium text-muted'>Prescription:</h4>
                                                <h4 className='text-base font-medium text-muted'>Paracetamol</h4>
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
                                            <h4 className='text-xl font-semibold text-muted'>Recorded by</h4>
                                            <h4 className='font-medium text-primary underline'>Dr. Susanna Anderson (General Practitioner)</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Diagnosis</h4>
                                            <h4 className='font-medium text-muted'>Common Cold</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Prescription</h4>
                                            <h4 className='font-medium text-muted'>Paracetamol</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Notes</h4>
                                            <h4 className='font-medium text-muted'>Get plenty of rest and drink lots of fluids.</h4>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Accordion type="single" collapsible className='text-muted'>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className='flex gap-3'>
                                        <div className='flex flex-col items-center justify-center bg-muted/10 rounded-xl shrink-0 size-20'>
                                            <h3 className='text-lg font-medium text-primary'>15</h3>
                                            <h3 className='text-lg font-medium text-primary'>Jun</h3>
                                        </div>
                                        <div className='flex flex-col justify-center'>
                                            <div className='flex gap-2'>
                                                <h4 className='text-base font-medium text-muted'>Dr. John Doe</h4>
                                            </div>
                                            <div className='flex gap-2'>
                                                <h4 className='text-base font-medium text-muted'>Diagnosis:</h4>
                                                <h4 className='text-base font-medium text-muted'>Acne</h4>
                                            </div>
                                            <div className='flex gap-2'>
                                                <h4 className='text-base font-medium text-muted'>Prescription:</h4>
                                                <h4 className='text-base font-medium text-muted'>Epiduo 0,3 %/2,5 %</h4>
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
                                            <h4 className='text-xl font-semibold text-muted'>Recorded by</h4>
                                            <h4 className='font-medium text-primary underline'>Dr. John Doe (General Practitioner)</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Diagnosis</h4>
                                            <h4 className='font-medium text-muted'>Common Cold</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Prescription</h4>
                                            <h4 className='font-medium text-muted'>Paracetamol</h4>
                                        </div>
                                        <div className='flex flex-col'>
                                            <h4 className='text-xl font-semibold text-muted'>Notes</h4>
                                            <h4 className='font-medium text-muted'>Get plenty of rest and drink lots of fluids.</h4>
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

export default MedicalRecords