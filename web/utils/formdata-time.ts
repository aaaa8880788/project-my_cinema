import  dayjs from 'dayjs'

export default function formData(time:string,format='YYYY-MM-DD'){
	return dayjs(time).format(format)
}