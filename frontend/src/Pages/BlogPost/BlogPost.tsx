import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './BlogPost.module.scss';
import PostHero from './PostHero/PostHero';
import PostContent from './PostContent/PostContent';
import PostTags from './PostTags/PostTags';
import PostAuthor from './PostAuthor/PostAuthor';
import PostRelated from './PostRelated/PostRelated';
import PostResponses from './PostResponses/PostResponses';
import PostCommentForm from './PostCommentForm/PostCommentForm';
import { fetchPost } from './blogPostApi';
import type { BlogPost as BlogPostType } from './types';

export default function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        const controller = new AbortController();

        setLoading(true);
        setPost(null);

        fetchPost(id, controller.signal)
            .then(setPost)
            .catch((e) => {
                if ((e as Error).name !== 'AbortError') console.error(e);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [id]);

    if (loading) return <div className={styles.state}>Загрузка…</div>;

    if (!post) {
        return (
            <div className={styles.state}>
                <p>Статья не найдена</p>
                <Link to="/blog">← Вернуться к блогу</Link>
            </div>
        );
    }

    return (
        <article className={styles.post}>
            <PostHero post={post} />
            <PostContent post={post} />
            <PostTags tags={post.tags} />
            <PostAuthor post={post} />
            <PostRelated postId={post.id} />
            <PostResponses postId={post.id} />
            <PostCommentForm postId={post.id} />
        </article>
    );
}
