import React, { forwardRef, useImperativeHandle, useRef } from 'react';

interface IProps {
  setChangeImage(file?: File): void;
}

export interface RefPropsPickerImg {
  openChangeImage(): void;
}

const PickerImg: React.RefForwardingComponent<RefPropsPickerImg, IProps> = (
  { setChangeImage },
  ref
) => {
  const refInput = useRef<HTMLInputElement>(null);

  const openChangeImage = () => refInput.current?.click();

  useImperativeHandle(ref, () => ({
    openChangeImage,
  }));

  return (
    <input
      ref={refInput}
      type="file"
      accept="image/*"
      capture="camera"
      style={{
        width: 1,
        height: 1,
        opacity: 0,
        position: 'absolute',
        overflow: 'hidden',
        zIndex: -1,
      }}
      onChange={(event) => {
        const { target } = event;
        const { files } = target;
        if (files && files[0]) {
          setChangeImage(files[0]);
        }
      }}
    />
  );
};

export default forwardRef(PickerImg);
