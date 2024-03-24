import React from 'react'
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'

function BookAppointment() {
    const [date, setDate] = React.useState<Date>()
    return (
        <div className='flex flex-col gap-12'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold tracking-tight text-muted'>
                    Book an Appointment
                </h1>
                <h3 className='text-muted-foreground'>
                    Here you can book an appointment with a doctor.
                </h3>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className="text-xl font-semibold tracking-tight text-muted">
                    Please select a doctor and leave a note for the appointment
                </h1>
                <div className='max-w-sm flex flex-col gap-3'>
                    <Select>
                        <SelectTrigger className="w-[180pxx] rounded-full">
                            <SelectValue placeholder="Select a Doctor" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Doctors</SelectLabel>
                                <SelectItem value="Dr. John Doe">Dr. John Doe</SelectItem>
                                <SelectItem value="Dr. Susanna Anderson">Dr. Susanna Anderson</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <div className='flex gap-3'>
                        <Popover>
                            <PopoverTrigger asChild className='w-2/3 rounded-full'>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <Input type="time" className="rounded-full w-1/3" />
                    </div>
                    <Textarea name="reason" id="reason" cols={30} rows={10} placeholder="Reason for appointment" className="rounded-xl" />
                    <Button className="rounded-full">Book Appointment</Button>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment