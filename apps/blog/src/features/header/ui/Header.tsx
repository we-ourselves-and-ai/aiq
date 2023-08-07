import { FC, useState } from 'react';
import { HeaderProps } from '../model/Header.types.ts';
import { Button, Input, Popup } from '@aiq/uikit';
import './Header.css';
import { createChat } from '../../../shared/services/ChatApi.ts';
import { createPost } from '../../../shared/services/PostsApi.ts';

export const Header: FC<HeaderProps> = () => {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState('');

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const generateArticle = async () => {
    try {
      setIsLoading(true);
      const data = await createChat(title);
      setText(data.content);
    } catch (e) {
      console.warn(e);
    } finally {
      setIsLoading(false);
    }
  };

  const publishArticle = async () => {
    try {
      await createPost(
        title,
        'https://avatars.mds.yandex.net/i?id=6b136f33edfb0be078311a94828e0aed2284b985-5433647-images-thumbs&ref=rim&n=33&w=428&h=300',
        text,
        'Denis',
      );
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div>
      <Popup trigger={<Button variant="small">Создать пост</Button>}>
        <div className="blog__header-wrapper">
          <Input
            withLabel={true}
            value={title}
            onChange={handleChangeTitle}
            showIcon={false}
            placeholder="Введите заголовок статьи"
          />
          <Button variant="small" onClick={generateArticle}>
            Сгенерировать
          </Button>
        </div>
        {isLoading && <div>Идет генерация статьи...</div>}
        {text && (
          <>
            <div>
              <p className="blog__header-text">{text}</p>
            </div>
            <Button variant="small" onClick={publishArticle}>
              Опубликовать
            </Button>
          </>
        )}
      </Popup>
    </div>
  );
};
