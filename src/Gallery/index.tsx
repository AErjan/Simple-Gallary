import { useState } from "react";
import { MainPhoto } from "./MainPhoto";
import { Navigation } from "./Navigation";
import { PreviewGallary } from "./PreviewGallary";

import { Photo } from "./types";

import style from "./index.module.scss";
interface GallaryProps {
  photos: Photo[];
}

export const Gallary: React.FC<GallaryProps> = ({ photos }) => {
  if (!photos.length) {
    return null;
  }

  const [indexActivePhoto, setIndexActivePhoto] = useState(0);
  const activePhoto = photos[indexActivePhoto];
  const prevPhoto = photos[indexActivePhoto - 1];
  const nextPhoto = photos[indexActivePhoto + 1];

  return (
    <div className={style.gallary}>
      <div className={style.gallaryContainer}>
        <MainPhoto
          prevPhoto={prevPhoto}
          activePhoto={activePhoto}
          nextPhoto={nextPhoto}
        />
        <Navigation
          className={style.gallaryNavigation}
          disabledPrev={!prevPhoto}
          disabledNext={!nextPhoto}
          onPrevClick={() => {
            setIndexActivePhoto(indexActivePhoto - 1);
          }}
          onNextClick={() => {
            setIndexActivePhoto(indexActivePhoto + 1);
          }}
        />
      </div>
      <PreviewGallary
        activePhotoIndex={indexActivePhoto}
        photos={photos}
        className={style.gallaryPreviewList}
      />
    </div>
  );
};
