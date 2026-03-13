import { z } from "zod";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("A valid email is required"),
  topic: z
    .enum(["General question", "Allergens", "Catering", "Press", "Feedback"])
    .or(z.string().trim().min(1, "Topic is required").max(100, "Topic is too long")),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

export const reservationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(7, "Phone is required").max(30, "Phone is too long"),
  date: z.string().regex(dateRegex, "Date must be in YYYY-MM-DD format"),
  time: z.enum([
    "8:00am",
    "8:30am",
    "9:00am",
    "9:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30pm",
    "1:00pm",
    "1:30pm",
  ]),
  partySize: z.coerce.number().int().min(1).max(6),
  notes: z.string().trim().max(1000, "Notes are too long").optional().or(z.literal("")),
});

export const orderSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(7, "Phone is required").max(30, "Phone is too long"),
  pickupDate: z.string().regex(dateRegex, "Pickup date must be in YYYY-MM-DD format"),
  pickupWindow: z.enum([
    "8:00am–9:00am",
    "9:00am–10:00am",
    "10:00am–11:00am",
    "11:00am–12:00pm",
    "12:00pm–1:00pm",
    "1:00pm–2:00pm",
    "2:00pm–3:00pm",
  ]),
  items: z.string().trim().min(1, "Items are required").max(3000, "Items are too long"),
  notes: z.string().trim().max(1000, "Notes are too long").optional().or(z.literal("")),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("A valid email is required"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ReservationInput = z.infer<typeof reservationSchema>;
export type OrderInput = z.infer<typeof orderSchema>;
export type NewsletterInput = z.infer<typeof newsletterSchema>;
