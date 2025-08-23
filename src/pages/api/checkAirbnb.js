// pages/api/checkAirbnb.js
import ical from "ical";

// Use your actual Airbnb iCal export URL here:
const AIRBNB_ICAL_URL = "https://www.airbnb.co.uk/calendar/ical/1493468121776952030.ics?s=826ecd999a373d45e727446e57b35d54";

export default async function handler(req, res) {
  const { checkIn, checkOut } = req.query;

  if (!checkIn || !checkOut) {
    return res.status(400).json({ error: "Missing dates" });
  }

  try {
    const response = await fetch(AIRBNB_ICAL_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch calendar: ${response.status}`);
    }

    const data = await response.text();
    const events = ical.parseICS(data);

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    let isAvailable = true;

    for (let key in events) {
      const event = events[key];
      if (event.start && event.end) {
        // Overlap detection
        if (checkInDate < event.end && checkOutDate > event.start) {
          isAvailable = false;
          break;
        }
      }
    }

    res.status(200).json({ available: isAvailable });
  } catch (error) {
    console.error("Error fetching Airbnb calendar:", error.message);
    res.status(500).json({ error: error.message });
  }
}
