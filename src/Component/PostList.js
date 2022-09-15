import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../Redux/slice/slice'

const PostList = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    console.log(data)


    useEffect(() => {
        dispatch(fetchPost())
    }, [dispatch])


    return (
        <>
            {
                data.loading === false ? <table className='w-100 border'>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                        {
                            data.postsList.map((v, i) => {
                                return <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.title}</td>
                                    <td>{v.body}</td>
                                </tr>
                            })
                        }

                    </tbody>
                </table> : <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </>
    )
}

export default PostList