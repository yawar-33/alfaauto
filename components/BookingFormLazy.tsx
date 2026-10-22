"use client";
import dynamic from "next/dynamic";
import LazyMount from "./LazyMount";

// Form JS is split into its own chunk and fetched only when the form nears the screen.
const BookingForm = dynamic(() => import("./BookingForm"));

export default function BookingFormLazy({ defaultService }: { defaultService?: string }) {
  return <LazyMount><BookingForm defaultService={defaultService} /></LazyMount>;
}
