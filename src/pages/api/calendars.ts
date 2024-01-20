import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  calendars: [Calendar]
}

type Calendar = {
  name: string
  endpointURL: string
	calendarURL: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ 
		calendars: [
			{
				name: 'Formula 1',
				endpointURL: 'https://f1calendar.com/api/year/2024',
				calendarURL: 'https://files-f1.motorsportcalendars.com/f1-calendar_p1_p2_p3_qualifying_sprint_gp.ics',
			}
		] 
	})
}