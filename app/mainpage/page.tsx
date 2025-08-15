// File: app/mainpage/page.tsx
import { redirect } from "next/navigation";

export default function MainPage() {
  redirect("/mainpage/today");
  return null;
}
