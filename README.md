# AI Call Assistant

Build a polished desktop web-app prototype called “AI Front Desk”.

  PURPOSE

  AI Front Desk helps small service businesses answer incoming phone calls when no receptionist is available.

  The AI answers the call, identifies what the caller needs, answers only approved basic questions, collects required information, and creates a structured record for human
  follow-up.

  This is a three-month MVP concept. The AI must not confirm appointments, promise availability, negotiate prices, take payments, or make commitments on behalf of the
  business.

  DESIGN DIRECTION

  Create a professional, trustworthy SaaS interface suitable for presentation to business stakeholders.

  Use:
  - A clean white and light-grey background
  - Dark navy text
  - Blue or teal as the primary accent colour
  - Rounded cards with subtle shadows
  - Clear typography
  - Simple, professional icons
  - Generous spacing
  - Desktop-first responsive layout
  - Realistic sample data for a fictional plumbing business

  The product should look modern but practical, not futuristic or overly decorative.

  APP STRUCTURE

  Create a left sidebar containing:

  - Dashboard
  - Calls
  - Business Settings
  - AI Configuration

  At the bottom of the sidebar, show the current business:

  “West Coast Plumbing”
  “Perth, Western Australia”

  Add a top navigation bar with:
  - Page title
  - Search
  - Notification icon
  - User profile menu

  SCREEN 1: DASHBOARD

  Create a dashboard overview with four summary cards:

  - Calls today: 12
  - New enquiries: 7
  - Needs follow-up: 4
  - Completed: 5

  Add a “Recent calls” table with these columns:

  - Caller
  - Phone number
  - Call type
  - Time
  - Urgency
  - Status
  - Action

  Use realistic example calls:

  1. Sarah Mitchell
     Phone: 0412 345 678
     Type: New service enquiry
     Request: Leaking kitchen tap
     Time: 10:42 AM
     Urgency: Medium
     Status: New

  2. Daniel Wong
     Phone: 0433 817 224
     Type: Existing job
     Request: Asking about arrival time
     Time: 10:21 AM
     Urgency: Low
     Status: Needs follow-up

  3. Emma Taylor
     Phone: 0408 552 913
     Type: New service enquiry
     Request: No hot water
     Time: 9:53 AM
     Urgency: High
     Status: New

  4. Michael Brown
     Phone: 0421 602 117
     Type: General question
     Request: Asked whether the business services Fremantle
     Time: 9:31 AM
     Urgency: Low
     Status: Completed

  Use coloured status badges, but keep the colours professional and accessible.

  Add a small panel called “AI Front Desk status” showing:

  - Phone line: Active
  - AI assistant: Online
  - Business configuration: Complete
  - Notification email: Connected

  SCREEN 2: CALLS

  Create a calls page containing:

  - Search input
  - Date filter
  - Call-type filter
  - Urgency filter
  - Status filter

  Show a table of calls with realistic data.

  Available statuses should be:

  - New
  - Reviewed
  - Completed
  - Incomplete

  Clicking a call should navigate to the Call Details page.

  Do not add outbound-calling controls.

  SCREEN 3: CALL DETAILS

  Create a detailed call page for this example:

  Caller: Emma Taylor
  Phone: 0408 552 913
  Time: Today at 9:53 AM
  Duration: 2 minutes 18 seconds
  Intent: New service enquiry
  Urgency: High
  Status: New

  Display a prominent warning:

  “AI did not make or confirm an appointment. Human follow-up is required.”

  Include an “AI call summary” card:

  “Emma called because her hot-water system stopped working this morning. She is located in Canning Vale and would prefer someone to contact her today. The AI collected her
  contact details but did not confirm availability or an appointment.”

  Add a “Collected information” section:

  - Name: Emma Taylor
  - Callback number: 0408 552 913
  - Location: Canning Vale
  - Reason for calling: Hot-water system not working
  - Urgency: High
  - Preferred callback time: Today
  - Additional notes: System stopped working this morning

  Add a “Missing or uncertain information” section:

  - Hot-water system type: Not provided
  - Property access details: Not provided

  Add a transcript section using realistic conversation bubbles:

  AI:
  “Hi, you’ve reached West Coast Plumbing. I’m the automated front-desk assistant. How can I help you today?”

  Caller:
  “Hi, our hot-water system stopped working this morning.”

  AI:
  “I’m sorry to hear that. I can collect some details so the team can contact you. Could I have your name?”

  Continue with a short, believable transcript.

  End the conversation with:

  AI:
  “Thank you, Emma. I’ve recorded your request and preferred callback time. Someone from West Coast Plumbing will review it and contact you. I haven’t confirmed an
  appointment.”

  Include these human actions:

  - Mark as reviewed
  - Mark as completed
  - Copy summary
  - Copy phone number

  Do not include an “AI callback”, “Book appointment” or “Confirm appointment” button.

  SCREEN 4: BUSINESS SETTINGS

  Create an editable form containing:

  Business name:
  West Coast Plumbing

  AI greeting:
  “Hi, you’ve reached West Coast Plumbing. I’m the automated front-desk assistant. How can I help you today?”

  Notification email:
  office@westcoastplumbing.example

  Business phone:
  08 6123 4567

  Opening hours:
  - Monday–Friday: 7:30 AM–5:00 PM
  - Saturday: 8:00 AM–12:00 PM
  - Sunday: Closed

  Services:
  - General plumbing
  - Hot-water systems
  - Blocked drains
  - Leak repairs
  - Tap and toilet repairs

  Service areas:
  - Perth
  - Canning Vale
  - Fremantle
  - Cockburn
  - Melville

  Include Save Changes and Cancel buttons.

  Show a small information message:

  “This information is used by the AI when answering incoming calls. The AI will only answer using approved business information.”

  SCREEN 5: AI CONFIGURATION

  Create an AI configuration page.

  Section 1: Information to collect

  Use checkboxes for:

  - Caller name — required
  - Callback number — required
  - Reason for calling — required
  - Location or suburb — required
  - Urgency — required
  - Preferred callback time — optional
  - Additional notes — optional

  Section 2: Supported call types

  Enable these three call types:

  - New service enquiry
  - Existing customer or existing job
  - General question

  Show this fallback behaviour:

  “For requests outside these call types, collect the caller’s name, phone number and reason for calling, then advise that a team member will follow up.”

  Section 3: Approved FAQs

  Show editable FAQ cards:

  Question:
  “What areas do you service?”

  Approved answer:
  “We service Perth, Canning Vale, Fremantle, Cockburn and Melville.”

  Question:
  “What are your opening hours?”

  Approved answer:
  “We are open Monday to Friday from 7:30 AM to 5:00 PM and Saturday from 8:00 AM to 12:00 PM.”

  Question:
  “Can you tell me the price?”

  Approved answer:
  “Pricing depends on the work required. I can collect your details and ask the team to contact you.”

  Allow users to add, edit and remove FAQ entries.

  Section 4: Safety rules

  Display these rules as enabled and locked:

  - Never confirm an appointment
  - Never guarantee availability
  - Never provide an unapproved price
  - Never negotiate
  - Never take payment information
  - Never provide professional or emergency advice
  - Clearly say when human follow-up is required

  Section 5: Fallback response

  Use this editable default response:

  “I’m not able to confirm that, but I can record your question and ask someone from the team to contact you.”

  Add Save Configuration and Preview Greeting buttons.

  INTERACTION REQUIREMENTS

  Make the prototype navigable.

  - Sidebar links should switch between screens
  - Recent calls should open the Call Details page
  - Filters should visually work
  - Form controls should be editable
  - Save buttons should show a success notification
  - Status buttons should update the displayed status
  - Copy buttons should show confirmation feedback
  - The layout should be responsive

  IMPORTANT SCOPE LIMITS

  Do not add:

  - Outbound AI calls
  - Appointment booking
  - Calendar integration
  - Payments
  - Price negotiation
  - Live call transfer
  - CRM integrations
  - SMS
  - Billing or subscriptions
  - Advanced analytics
  - Multiple languages
  - Visual workflow builders
  - A mobile app

  Use the label “Conceptual MVP” somewhere subtle in the interface.

  The finished prototype should clearly demonstrate this workflow:

  Business configures approved information
  → Customer calls the business
  → AI answers and collects information
  → AI creates a structured summary
  → A human reviews and follows up

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/99439e7e-ce34-5b13-a6c3-0461bf90562d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
