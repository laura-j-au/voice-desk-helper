export type CallStatus = "New" | "Reviewed" | "Completed" | "Incomplete";
export type Urgency = "Low" | "Medium" | "High";
export type CallType = "New service enquiry" | "Existing job" | "General question";

export type CallRecord = {
  id: string;
  caller: string;
  phone: string;
  type: CallType;
  request: string;
  time: string;
  date: "Today" | "Yesterday" | "20 Sep 2026";
  urgency: Urgency;
  status: CallStatus;
  duration: string;
};

export const calls: CallRecord[] = [
  { id: "sarah-mitchell", caller: "Sarah Mitchell", phone: "0412 345 678", type: "New service enquiry", request: "Leaking kitchen tap", time: "10:42 AM", date: "Today", urgency: "Medium", status: "New", duration: "1m 46s" },
  { id: "daniel-wong", caller: "Daniel Wong", phone: "0433 817 224", type: "Existing job", request: "Asking about arrival time", time: "10:21 AM", date: "Today", urgency: "Low", status: "Reviewed", duration: "1m 12s" },
  { id: "emma-taylor", caller: "Emma Taylor", phone: "0408 552 913", type: "New service enquiry", request: "No hot water", time: "9:53 AM", date: "Today", urgency: "High", status: "New", duration: "2m 18s" },
  { id: "michael-brown", caller: "Michael Brown", phone: "0421 602 117", type: "General question", request: "Asked whether the business services Fremantle", time: "9:31 AM", date: "Today", urgency: "Low", status: "Completed", duration: "1m 04s" },
  { id: "priya-nair", caller: "Priya Nair", phone: "0451 224 098", type: "New service enquiry", request: "Blocked bathroom drain", time: "4:18 PM", date: "Yesterday", urgency: "Medium", status: "Reviewed", duration: "2m 02s" },
  { id: "james-wilson", caller: "James Wilson", phone: "0417 890 331", type: "Existing job", request: "Could not provide job address", time: "2:45 PM", date: "Yesterday", urgency: "Low", status: "Incomplete", duration: "0m 38s" },
  { id: "olivia-chen", caller: "Olivia Chen", phone: "0438 614 205", type: "General question", request: "Asked about Saturday opening hours", time: "11:08 AM", date: "20 Sep 2026", urgency: "Low", status: "Completed", duration: "0m 54s" },
];
