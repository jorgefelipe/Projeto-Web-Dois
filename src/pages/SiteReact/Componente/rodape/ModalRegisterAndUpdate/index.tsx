import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { Modal, Input, OutlineButton } from 'components';
import PickerImg, { RefPropsPickerImg } from 'components/PickerImg';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { IPost, ICreatePost } from 'models/Post';
import postService from 'services/post';
import uploadService from 'services/upload';
import { setNewPost, updatePost } from 'store/post';
import { colors } from 'styles';
import { Text, TextError } from 'styles/styledComponents';

import ContentImage from '../ContentImage';
import { Container, TextArea, ContainerButtons } from './styles';

interface IProps {
  isEdit: boolean;
  post?: IPost;
  setShowModal(showModal: boolean): void;
}

const ModalRegisterAndUpdate: React.FC<IProps> = ({
  isEdit,
  post,
  setShowModal,
}) => {
  const refPickerImg = useRef<RefPropsPickerImg>(null);
  const [img, setImg] = useState<File>();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const onSubmit = async (values: ICreatePost) => {
    if (!isEdit) {
      try {
        let { photoUrl } = values;
        if (img) {
          const resp = await uploadService.uploadFile(img);
          photoUrl = resp.data.img_url;
        }
        const newPost = await postService.createPost({ ...values, photoUrl });
        dispatch(setNewPost(newPost.data.data));
        addToast('Post adicionado com sucesso!', { appearance: 'success' });
      } catch (err) {
        addToast(err.response.data.message, { appearance: 'error' });
      } finally {
        setShowModal(false);
      }
    } else if (post) {
      try {
        let { photoUrl } = values;
        if (img) {
          const resp = await uploadService.uploadFile(img);
          photoUrl = resp.data.img_url;
        }
        await postService.updatePost({
          body: { ...values, photoUrl },
          postId: post._id,
        });
        dispatch(updatePost({ body: { ...values, photoUrl }, postId: post._id }));
        addToast('Post atualizado com sucesso!', { appearance: 'success' });
      } catch (err) {
        addToast(err.response.data.message, { appearance: 'error' });
      } finally {
        setShowModal(false);
      }
    }
  };

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .required('Campo obrigatório')
      .min(5, 'Mínimo de 5 caracteres'),
    description: yup
      .string()
      .required('Campo obrigatório')
      .min(20, 'Mínimo de 20 caracteres'),
  });

  const { errors, values, handleChange, handleSubmit } = useFormik<ICreatePost>(
    {
      initialValues: {
        description: isEdit && post ? post.description : '',
        title: isEdit && post ? post.title : '',
        photoUrl: isEdit && post ? post.photoUrl : '',
      },
      validationSchema,
      onSubmit,
    }
  );

  return (
    <Modal
      title={isEdit ? 'Editar post' : 'Cadastrar novo post'}
      onBackDropPress={() => setShowModal(false)}
    >
      <PickerImg ref={refPickerImg} setChangeImage={(file) => setImg(file)} />
      <Container>
        <Input
          label="Título"
          placeholder="Insira o titulo do post"
          value={values.title}
          onChange={handleChange('title')}
          errorMsg={errors.title}
        />
        <ContentImage
          refPickerImg={refPickerImg}
          image={img ? URL.createObjectURL(img) : values.photoUrl}
        />
        <Text color={colors.lightBlack} size="14px" marginTop="10px">
          Descrição
        </Text>
        <TextArea
          value={values.description}
          onChange={handleChange('description')}
          placeholder="Insira a descrição do post"
        />
        {errors.description && <TextError>{errors.description}</TextError>}
        <ContainerButtons>
          <OutlineButton label="Cancela" onPress={() => setShowModal(false)} />
          <OutlineButton
            label="Salvar"
            color={colors.lightGreen}
            onPress={handleSubmit}
          />
        </ContainerButtons>
      </Container>
    </Modal>
  );
};
export default ModalRegisterAndUpdate;
