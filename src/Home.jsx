import { Button } from "@/components/ui/button"
import ShimmerButton from "@/components/ui/shimmer-button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>

      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Shimmer Button
        </span>
      </ShimmerButton>
    </div>
  )
}
