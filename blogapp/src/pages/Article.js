import React from 'react'
import articleContent from './article-content'
import Articles from '../components/Articles'
import NotFound from './NotFound'

const Article = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name)
    if(!article) return <NotFound />
    const otherArticles = articleContent.filter(article => article.name !== name)
    return (
        <>
        <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-grey-900">
            {article.title}
        </h1>
        {article.content.map((paragraph, index)=>(
            <p className="mx-auto leading-relaxed text-base mb-4" key={index}>
                {paragraph}
            </p>
        ))}
        <h1 className="sm:text-2x text-sl mt-20 mb-4 text-gray-900 text-center">
            OTHER <b>ARTICLES</b>
        </h1>
        <div className="flex flex-wrap -m-4">
            <Articles articles = {otherArticles} />    
        </div>   
        </>
    )
}

export default Article
