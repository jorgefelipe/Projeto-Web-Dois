import React from 'react';
import { BsPencil } from 'react-icons/bs';

import placeholderProduct from 'assets/images/placeholder.png';
import { RefPropsPickerImg } from 'components/PickerImg';

import { colors } from 'styles';
import { Text } from 'styles/styledComponents';

import {
  ContainerImage,
  ContainerPencil,
  ContainerPlaceholder,
  ImagePlaceholder,
  ImageProduct,
} from './styles';

interface IProps {
  refPickerImg: React.RefObject<RefPropsPickerImg>;
  image?: string;
}

const ContentImage: React.FC<IProps> = ({
  refPickerImg,
  image,
}) => (
  <ContainerImage onClick={() => refPickerImg.current?.openChangeImage()}>
    {image ? (
      <ImageProduct src={image} />
    ) : (
      <ContainerPlaceholder>
        <ImagePlaceholder src={placeholderProduct} />
        <Text color={colors.lightGrey} size="22px">
          Insira uma imagem
        </Text>
      </ContainerPlaceholder>
    )}
    <ContainerPencil>
      <BsPencil color={colors.secondary} size={25} />
    </ContainerPencil>
  </ContainerImage>
);

export default ContentImage;
