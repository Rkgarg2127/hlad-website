import PositionCard from '@/components/positionCard'
import Image from 'next/image'
import demo from "@/public/images/demo-profile.jpeg"
import PixelTransition from '@/components/bits/animations/PixelTransition'

type PositionCardData = {
    id: number;
    name: string;
    position: string;
    imageSrc: string;
    link: string;
    description: string;
    tags: string[];
};

type Props = {
  slide: PositionCardData;
  isActive: boolean;
};


const dummyData: PositionCardData[] = [
    {
        id: 1,
        name: "Alice Johnson",
        position: "President",
        imageSrc: "/images/demo-profile.jpeg",
        link: "/position/alice-johnson",
        description: "Leads the team and oversees all operations.",
        tags: ["Leadership", "Strategy"]
    },
    {
        id: 2,
        name: "Bob Smith",
        position: "Vice President",
        imageSrc: "/images/stock-photo.jpg",
        link: "/position/bob-smith",
        description: "Assists the president and manages projects.",
        tags: ["Management", "Projects"]
    },
    {
        id: 3,
        name: "Carol Lee",
        position: "Secretary",
        imageSrc: "/images/hero-section/hero-section-bg-1.jpg",
        link: "/position/carol-lee",
        description: "Handles documentation and communication.",
        tags: ["Documentation", "Communication"]
    },
    {
        id: 4,
        name: "David Kim",
        position: "Treasurer",
        imageSrc: "/images/hero-section/hero-section-bg-2.jpg",
        link: "/position/david-kim",
        description: "Manages finances and budgeting.",
        tags: ["Finance", "Budgeting"]
    }
];

const postHolderData = dummyData;

export default function PostHolder() {
    return (
        <section
            id="positions"
            className="py-12 md:py-16 bg-white"
        >
            <div className="container px-4 md:px-6">

                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-space-cadet">Our PostHolders</h2>
                    <p className="text-lg md:text-xl text-muted-foreground">Some Description sub heading</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 align-middle justify-center gap-6 md:gap-8 px-4">
                    {postHolderData.map((postHolder) => (
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {postHolderData.map((postHolder, index) => (
                        <PixelTransition
                            firstContent={
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                                    alt="default pixel transition content, a cat!"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            }
                            secondContent={
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "grid",
                                        placeItems: "center",
                                        backgroundColor: "#111"
                                    }}
                                >
                                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Meow!</p>
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#ffffff'
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CardFrontSide({ slide, isActive }: Props){
    return(
        <div></div>
    )
}

function CardBackSide(){
    return(
        <div></div>
    )
}