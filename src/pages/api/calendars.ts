import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  calendars: Calendar[]
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
	const calendars:Calendar[] = [
		{
			name: 'Formula 1',
			endpointURL: 'https://f1calendar.com/api/calendar',
			calendarURL: 'webcal://files-f1.motorsportcalendars.com/f1-calendar_p1_p2_p3_qualifying_sprint_gp.ics',
		},
		{
			name: 'F1 Academy',
			endpointURL: 'https://f1academycalendar.com/api/calendar',
			calendarURL: 'webcal://files-f1-academy.motorsportcalendars.com/f1-academy-calendar_fp1_fp2_qualifying1_qualifying2_race1_race2_race3.ics',
		},
		{
			name: 'Formula 2',
			endpointURL: 'https://f2cal.com/api/calendar',
			calendarURL: 'webcal://files-f2.motorsportcalendars.com/f2-calendar_p_q_sprint_feature.ics',
		},
		{
			name: 'Formula 3',
			endpointURL: 'https://f2cal.com/api/calendar',
			calendarURL: 'webcal://files-f2.motorsportcalendars.com/f2-calendar_p_q_sprint_feature.ics',
		},
		{
			name: 'Formula E',
			endpointURL: 'https://formulaecal.com/api/calendar',
			calendarURL: 'webcal://files-fe.motorsportcalendars.com/fe-calendar_p1_p2_p3_qualifying_race.ics',
		},
		{
			name: 'Extreme E',
			endpointURL: 'https://extremeecalendar.com/api/calendar',
			calendarURL: 'webcal://files-extremee.motorsportcalendars.com/extremee-calendar_shakedown_qualifying1_qualifying2_undefined_undefined.ics',
		},
		{
			name: 'MotoGP',
			endpointURL: 'https://motogpcal.com/api/calendar',
			calendarURL: 'webcal://files-motogp.motorsportcalendars.com/motogp-calendar_p1_p2_p3_p4_qualifying1_qualifying2_sprint_race.ics',
		},
	]
	
  res.status(200).json({ 
		calendars: calendars
	})
}