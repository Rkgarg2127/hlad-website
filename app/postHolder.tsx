import PositionCard from '@/components/positionCard'
import Image from 'next/image'
import demo from "@/public/images/demo-profile.jpeg"

const dummyData = [
    {
        id: 1,
        name: "First Person",
        description: "Description for First Person",
        imageSrc: "/images/demo-profile.jpeg",
        link: "/position/first-person",
        tags: ["Tag1", "Tag2"]
    },
    {
        id: 2,
        name: "Second Person",
        description: "Description for Second Person",
        imageSrc: "/images/demo-profile.jpeg",
        link: "/position/second-person",
        tags: ["Tag3", "Tag4"]
    },
    {
        id: 3,
        name: "Third Person",
        description: "Description for Third Person",
        imageSrc: "/images/demo-profile.jpeg",
        link: "/position/third-person",
        tags: ["Tag5", "Tag6"]
    },
    {
        id: 4,
        name: "Fourth Person",
        description: "Description for Fourth Person",
        imageSrc: "/images/demo-profile.jpeg",
        link: "/position/fourth-person",
        tags: ["Tag7", "Tag8"]
    }
]

const postHolderData = dummyData;

export default function PostHolder() {
    return (
        <section
            id="positions"
            className="py-12 md:py-16 bg-gradient-to-br from-jordy-blue/10 via-cornflower-blue/15 to-green-blue/10"
        >
            <div className="container px-4 md:px-6">

                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-space-cadet">Our PostHolders</h2>
                    <p className="text-lg md:text-xl text-muted-foreground">Some Description sub heading</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {postHolderData.map((postHolder, index) => (
                        <PositionCard
                            key={postHolder.id}
                            title={postHolder.name}
                            description={postHolder.description}
                            imageSrc={postHolder.imageSrc}
                            link={postHolder.link}
                            tags={postHolder.tags}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
