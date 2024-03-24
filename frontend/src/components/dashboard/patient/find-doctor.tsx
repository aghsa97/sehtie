import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function FindDoctor() {
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold tracking-tight text-muted'>
                    Find a Doctor
                </h1>
                <h3 className='text-muted-foreground'>
                    Here you can find a doctor and add them to your list of doctors.
                </h3>
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-6'>
                    <h1 className="text-xl font-semibold tracking-tight text-muted">
                        Your doctors
                    </h1>
                    <ul className="flex flex-col gap-3">
                        <li className='flex gap-3'>
                            <div className='flex flex-col items-center justify-center bg-muted/10 rounded-full shrink-0 size-16'>
                                <img src="/doctor1.jpg" alt="" className="rounded-full size-16 object-cover" />
                            </div>
                            <div className='flex flex-col justify-center gap'>
                                <div className='flex flex-col items-start'>
                                    <h4 className='text-xl font-medium text-muted'>Dr. John Doe</h4>
                                    <h4 className='font-medium text-muted-foreground'>Dermatologist</h4>
                                </div>
                            </div>
                        </li>
                        <li className='flex gap-3'>
                            <div className='flex flex-col items-center justify-center bg-muted/10 rounded-full shrink-0 size-16'>
                                <img src="/doctor2.jpg" alt="" className="rounded-full size-16 object-cover" />
                            </div>
                            <div className='flex justify-between gap-12'>
                                <div className='flex flex-col items-start'>
                                    <h4 className='text-xl font-medium text-muted'>Dr. Susanna Anderson</h4>
                                    <h4 className='font-medium text-muted-foreground'>General Practitioner</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className="text-xl font-semibold tracking-tight text-muted">
                        Find a doctor
                    </h1>
                    <div className='max-w-sm flex flex-col gap-3'>
                        <Input type="text" placeholder="Search for a doctor" className="rounded-full" />
                        <Button className="rounded-full">Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindDoctor