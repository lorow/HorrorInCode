import React from 'react';
import '../../components/BlogSlice/style.scss';
import BlogSlice from '../../components/BlogSlice';

export default function BlogPanel(props) {
    
    
    return (
        <section className="blog-section">
            <h1 className="blog__section__title">Latest articles</h1>
            <hr className="blog__section__title--decoration"></hr>

            <section className="blog__article__container">
                <BlogSlice 
                    articleTitle="JWT TOKENS"
                    articleShortDesc="I'm just testing things out"
                    artBackground="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg"
                />
                <BlogSlice 
                    articleTitle="JWT TOKENS"
                    articleShortDesc="I'm just testing things out"
                    artBackground="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg"
                />
                <BlogSlice 
                    articleTitle="JWT TOKENS"
                    articleShortDesc="I'm just testing things out"
                    artBackground="https://i.pinimg.com/originals/b8/94/01/b89401be81d329ecb27280e34ef49627.jpg"
                />
            </section>

        </section>       
    )
}