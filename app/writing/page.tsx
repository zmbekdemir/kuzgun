import { redirect } from "next/navigation";

export default function WritingStudioPage() {
  redirect("/writing/books");
  return null;
}