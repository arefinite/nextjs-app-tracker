import { Control } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '../../ui/textarea'

type CustomTextFieldProps = {
  name: string
  control: Control<any>
}

type CustomSelectFieldProps = {
  name: string
  control: Control<any>
  items: string[]
  labelText?: string
}

export const CustomTextField = ({ name, control }: CustomTextFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export const CustomSelectField = ({
  name,
  control,
  labelText,
  items,
}: CustomSelectFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>{labelText || name}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue>{field.value}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {items.map(item => (
                  <SelectItem key={item} value={item} className='capitalize'>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export const CustomTextArea = ({ name, control }: CustomTextFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='capitalize'>{name}</FormLabel>
          <FormControl>
            <Textarea {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
