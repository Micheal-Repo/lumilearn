import Link from "next/link"
import {Button} from "@/components"


export default function EnrollButton() {
  return (
    <Link href="/dashboard/courses/1234/lesson/1233">
      <Button
        size="lg"
        className="w-full bg-gradient-to-r from-green-600 to-pink-500 text-white"
      >
        Access Course
      </Button>
    </Link>
  );
}
