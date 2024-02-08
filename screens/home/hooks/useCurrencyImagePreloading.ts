import { useEffect, useState } from "react";
import { Image } from "react-native";
import { TCurrency } from "@/types/business";

const useCurrencyImagePreloading = (currencies: TCurrency[]) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagesPromises = currencies.map((currency) =>
          Image.prefetch(currency.image)
        );
        await Promise.all(imagesPromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadImages();
  }, [currencies]);

  return imagesLoaded;
};

export default useCurrencyImagePreloading;
