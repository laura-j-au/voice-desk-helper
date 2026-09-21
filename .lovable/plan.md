# AI Front Desk prototype

## Overview
Build a polished, responsive desktop-first prototype for West Coast Plumbing that demonstrates the full incoming-call workflow without adding any backend, outbound calling, bookings, payments, or integrations. The prototype will use realistic in-memory sample data and fully interactive local UI states.

## App structure
- Create a shared application shell with a fixed desktop sidebar, compact mobile drawer, and top bar containing the current page title, search, notifications, profile menu, and a subtle “Conceptual MVP” label.
- Add separate navigable pages for:
  - `/` — Dashboard
  - `/calls` — Calls list
  - `/calls/$callId` — Call details
  - `/business-settings` — Business settings
  - `/ai-configuration` — AI configuration
- Keep the current business identity at the bottom of the sidebar: West Coast Plumbing, Perth, Western Australia.
- Add distinct page metadata for every route.

## Visual system
- Establish an understated business SaaS system in the global styles: white and light-grey surfaces, dark navy text, accessible teal-blue accents, restrained semantic status colours, subtle shadows, and small rounded corners.
- Use clear sans-serif typography, professional line icons, generous spacing, stable table layouts, visible focus states, and responsive behaviour.
- Reuse the existing interface primitives for buttons, fields, selects, checkboxes, tables, menus, alerts, and notifications.

## Dashboard
- Add four summary cards with the requested call counts.
- Build the Recent calls table with the four supplied callers, requests, urgency, status badges, and a clear details action; rows and actions open the relevant call details view.
- Add the AI Front Desk status panel showing phone line, assistant, configuration, and email connection states.
- Include a compact workflow cue connecting configuration, incoming calls, AI collection, structured summaries, and human follow-up.

## Calls
- Build a searchable calls register with realistic plumbing enquiries.
- Add working date, call-type, urgency, and status filters; filters immediately narrow the visible rows and include a clear empty state.
- Support only New, Reviewed, Completed, and Incomplete on this page.
- Make each row keyboard-accessible and navigable to call details, with no outbound-call controls.

## Call details
- Create the full Emma Taylor record with timing, duration, intent, high urgency, and current status.
- Display the required human-follow-up warning prominently.
- Add the supplied AI summary, structured collected information, missing/uncertain fields, and a believable full transcript ending with the required appointment disclaimer.
- Add working actions for Mark as reviewed, Mark as completed, Copy summary, and Copy phone number.
- Update the displayed status immediately and show confirmation notifications for status and clipboard actions.

## Business settings
- Build an editable form populated with the supplied business name, greeting, contact details, opening hours, services, and service areas.
- Allow service and area entries to be edited, added, and removed without persistence.
- Add the approved-information notice plus working Save Changes and Cancel actions; save shows a success notification and cancel restores the last saved values.

## AI configuration
- Add configurable collection fields with required/optional labels and checkboxes.
- Add enabled supported call types and the stated fallback behaviour.
- Build editable FAQ entries with add, edit, and remove controls.
- Show all safety rules enabled and locked so they cannot be disabled.
- Add the editable fallback response, a Save Configuration action with success feedback, and a Preview Greeting dialog.

## Validation
- Verify navigation, calls filtering, call detail status changes, clipboard feedback, editable forms, add/remove FAQ behaviour, cancel/reset behaviour, and save notifications.
- Check desktop and mobile layouts for readable tables/forms, a usable sidebar replacement, no overlaps, and appropriate responsive stacking.
- Confirm the prototype contains none of the excluded controls or product areas.
