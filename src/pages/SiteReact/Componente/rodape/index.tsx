import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { IoMdAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { Button, AlertModal } from 'components';

import { IPost } from 'models/Post';
import postService from 'services/post';
import { RootState } from 'store';
import { deletePost, setPosts } from 'store/post';
import { colors } from 'styles';

import ModalRegister from './ModalRegisterAndUpdate';
import {
  Container,
  ContentPost,
  Title,
  Description,
  ContainerButton,
  ContainerIcons,
  ContentIcons,
  ContainerImage,
  ImageProduct,
} from './styles';

const Rodape: React.FC = () => {
  const dispatch = useDispatch();
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState({
    show: false,
    isEdit: false,
  });
  const [postSelected, setPostSelected] = useState<IPost>({} as IPost);
  const { addToast } = useToasts();
  const { postList } = useSelector((states: RootState) => states.post);

  const getPost = async () => {
    try {
      const resp = await postService.getPost();
      dispatch(setPosts(resp.data.data));
    } catch (err) {
      console.log(err);
      addToast(err.response.data.message, { appearance: 'error' });
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line
  }, []);

  const deletePostPress = async () => {
    try {
      await postService.deletePost(postSelected._id);
      dispatch(deletePost(postSelected._id));
      addToast('Post excluído com sucesso', { appearance: 'success' });
    } catch (err) {
      addToast(err.response.data.message, { appearance: 'error' });
    } finally {
      setShowAlertModal(false);
    }
  };

  return (
    <>
      <Container>
        {postList?.length > 0 ? (
          postList.map((item, index) => (
            <ContentPost key={index.toString()}>
              <Title>{item.title}</Title>
              {item.photoUrl && (
                <ContainerImage>
                  <ImageProduct src={item.photoUrl} />
                </ContainerImage>
              )}
              <Description>{item.description}</Description>
              <ContentIcons>
                <ContainerIcons
                  onClick={() => {
                    setPostSelected(item);
                    setShowAlertModal(true);
                  }}
                >
                  <AiFillDelete color={colors.white} />
                </ContainerIcons>
                <ContainerIcons
                  color={colors.primaryLight}
                  onClick={() => {
                    setPostSelected(item);
                    setShowRegisterModal({ isEdit: true, show: true });
                  }}
                >
                  <AiFillEdit color={colors.white} />
                </ContainerIcons>
              </ContentIcons>
            </ContentPost>
          ))
        ) : (
          <Title style={{ textAlign: 'center' }}>Nenhum post cadastrado!</Title>
        )}
      </Container>
      <ContainerButton>
        <Button
          iconSize={30}
          Icon={IoMdAddCircle}
          label="Adicionar novo post"
          width="300px"
          onPress={() => setShowRegisterModal({ show: true, isEdit: false })}
        />
      </ContainerButton>
      {showAlertModal && (
        <AlertModal
          description="Tem certeza que deseja excluir o post?"
          title="Excluir post"
          setShow={setShowAlertModal}
          onPressConfirm={deletePostPress}
          showCancelButton
          colorButton={colors.red}
        />
      )}
      {showRegisterModal.show && (
        <ModalRegister
          isEdit={showRegisterModal.isEdit}
          setShowModal={(show) =>
            setShowRegisterModal({ ...showRegisterModal, show })
          }
          post={postSelected}
        />
      )}
    </>
  );
};

export default Rodape;
