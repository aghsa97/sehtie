import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

function RecordsPrescriptions() {
    const [selectedType, setSelectedType] = useState<string | null>()
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold tracking-tight text-muted'>
                    Records & Prescriptions
                </h1>
                <h3 className='text-muted-foreground'>
                    Create a new record or prescription for your patients.
                </h3>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className="text-xl font-semibold tracking-tight text-muted">
                    Find your patient and create a new record or prescription
                </h1>
                <div className='max-w-sm flex flex-col gap-3'>
                    <Select onValueChange={(value) => setSelectedType(value)}>
                        <SelectTrigger className='rounded-full'>
                            <SelectValue placeholder="Select an Action" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Action</SelectLabel>
                                <SelectItem value='record'>Medical Record</SelectItem>
                                <SelectItem value='prescription'>Prescription</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Input type="text" name="patient" id="patient" placeholder="Patient Email or Phone number" className="rounded-full" />
                    {
                        selectedType === 'record' && (
                            <>
                                <Input type="text" name="diagnosis" id="diagnosis" placeholder="Diagnosis" className="rounded-full" />
                                <Input type="text" name="prescription" id="prescription" placeholder="Prescription" className="rounded-full" />
                                <Textarea name="reason" id="reason" cols={30} rows={10} placeholder="Doctor notes" className="rounded-xl" />
                                <Button className="rounded-full">Create</Button>
                            </>
                        )
                    }
                    {
                        selectedType === 'prescription' && (
                            <>
                                <Input type="text" name="active substance" id="active substance" placeholder="Active substance" className="rounded-full" />
                                <Input type="text" name="applies even" id="applies even" placeholder="Applies even" className="rounded-full" />
                                <Textarea name="how to use" id="how to use" cols={30} rows={10} placeholder="How to use" className="rounded-xl" />
                                <Button className="rounded-full">Create</Button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default RecordsPrescriptions