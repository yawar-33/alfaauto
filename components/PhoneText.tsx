import { Fragment } from "react";
import { BIZ } from "@/lib/site";

/** Renders text with every occurrence of the business phone number as a tap-to-call link. */
export default function PhoneText({ text }: { text: string }) {
  const parts = text.split(BIZ.phone);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <a href={`tel:${BIZ.tel}`} className="font-semibold underline underline-offset-2 hover:text-gold-600">{BIZ.phone}</a>}
        </Fragment>
      ))}
    </>
  );
}
