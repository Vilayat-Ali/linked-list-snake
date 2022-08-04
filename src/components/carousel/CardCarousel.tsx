// Libraries
import { useState, useEffect } from "react";

// UI
import { Box, Button } from "@chakra-ui/react";

// Components
import TechFeatureCard from "../cards/TechFeatureCard";

type Props = {
  carouselItems: any[];
};

const CardCarousel = ({ carouselItems }: Props) => {
  // states
  const [cardCount, setCardCount]: [number, any] = useState<number>(0);
  // handler function
  /// show next card in the carousel
  const showNext = () => {
    setCardCount((cardCount + 1) % carouselItems.length);
  };
  /// show previous card in the carousel
  const showPrev = () => {
    setCardCount(cardCount - 1 >= 0 ? cardCount - 1 : carouselItems.length - 1);
  };
  return (
    <Box>
      {/* Screen */}
      <TechFeatureCard
        title={carouselItems[cardCount].title}
        image={carouselItems[cardCount].image}
        description={carouselItems[cardCount].description}
        rating={carouselItems[cardCount].rating}
      />
      {/* Control buttons */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Button onClick={showPrev} colorScheme="red" className="my-4">
          Previous
        </Button>
        <Button onClick={showNext} colorScheme="green" className="my-4">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CardCarousel;
