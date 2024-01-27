import cl from "classnames";
import { CommonClassProps, Photo } from "../types";

import style from "./index.module.scss";
import { useEffect, useMemo, useRef } from "react";

interface PreviewGallaryProps extends CommonClassProps {
  activePhotoIndex: number;
  photos: Photo[];
}

export const PreviewGallary: React.FC<PreviewGallaryProps> = ({
  activePhotoIndex,
  photos,
  className,
}) => {
  if (!photos.length) {
    return null;
  }

  const previewContainer = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!previewContainer.current) {
      return;
    }

    previewContainer.current.style.transform = `translate3d(-${
      activePhotoIndex * 164
    }px, 0, 0)`;
  }, [activePhotoIndex]);

  return (
    <div className={cl(style.previewGallary, className)}>
      {useMemo(
        () => (
          <ul className={style.previewGallaryTruck} ref={previewContainer}>
            {photos.map((photo) => (
              <li key={photo.id} className={style.previewGallaryPreview}>
                <img
                  src={photo.preview}
                  alt={photo.description}
                  className={style.previewGallaryImage}
                />
              </li>
            ))}
          </ul>
        ),
        []
      )}

      <div className={style.previewGallaryCover}>
        {activePhotoIndex + 1} / {photos.length}
      </div>
    </div>
  );
};
