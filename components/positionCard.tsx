import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PositionCardProps {
  title: string
  description: string
  imageSrc: string
  link: string
  tags: string[]
  className?: string;
}


export default function PositionCard({ title, description, imageSrc, link, tags, className = "" }: PositionCardProps) {
  return (
    <Card
      className={`overflow-hidden flex flex-col h-full p-0 border-0 bg-white shadow-md transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] hover:shadow-2xl hover:scale-[1.025] group rounded-2xl ${className}`}
      style={{ willChange: 'transform, box-shadow' }}
    >
      <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-jordy-blue/10 to-cornflower-blue/10">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-1"
          style={{ transitionProperty: 'transform' }}
        />
      </div>
      <CardContent className="p-4 md:p-6 flex-grow flex flex-col justify-evenly">
        <Link href={link} className="inline-block">
          <h3 className="text-xl font-bold mb-2 text-space-cadet group-hover:text-green-blue transition-colors duration-300">
            {title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-jordy-blue/20 text-space-cadet hover:bg-jordy-blue/30 border-cornflower-blue/30 shadow-sm transition-all duration-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
        {/* <Button
          size="sm"
          asChild
          variant={"destructive"}
        >
          <Link href={link} className="inline-block">
            {"Learn More"}
          </Link>
        </Button> */}
      </CardContent>
    </Card>
  )
}
