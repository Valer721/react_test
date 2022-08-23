import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/postService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchPostById()
    }, [])

    return (
        <div className="page__route">
            <div>
                <h1>Страница поста с ID = {params.id}</h1>
                {isLoading
                    ? <Loader/>
                    : <div style={{textAlign: "center"}}>{post.id}. {post.title}</div>
                }
            </div>
        </div>
    );
};

export default PostIdPage;