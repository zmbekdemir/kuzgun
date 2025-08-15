import { redirect } from "next/navigation";

export default function EditorialPage() {
  redirect("/editorial/submissions");
  return null;
}