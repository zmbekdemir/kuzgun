import { redirect } from "next/navigation";

export default function EditorialPage() {
  redirect("/editorial/assignments");
  return null;
}